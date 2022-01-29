<template>
  <div>
    <div class="container">
      <h1>Lista de tarefas</h1>
      <div id="btn_add">
        <button
          type="button"
          data-toggle="modal"
          data-target="#modalAdd"
          class="btn btn-primary btn-sm"
        >
          Nova tarefa
        </button>
      </div>

      <!-- <div class="form_add_tarefa">
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">Descrição</label>
            <input
              type="text"
              class="form-control mb-2"
              id="inlineFormInput"
              placeholder="Descrição"
            />
          </div>
          <label class="my-1 mr-2" for="inlineFormCustomSelectPref"
            >Preference</label
          >
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-2">
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div> -->

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">código</th>
            <th scope="col" style="text-align: left">Titulo</th>
            <th scope="col" style="text-align: left">Descrição</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarefa, i) in tarefas" :key="i">
            <th scope="row">{{ tarefa.id }}</th>
            <td style="text-align: left">{{ tarefa.titulo }}</td>
            <td style="text-align: left">{{ tarefa.descricao }}</td>
            <td>{{ tarefa.status }}</td>
            <td>
              <button
                type="button"
                data-toggle="modal"
                @click="setarTarefaEditar(tarefa)"
                data-target="#modalEdit"
                style="margin-right: 5px; width: 30px"
                class="btn btn-primary btn-sm"
              >
                !
              </button>
              <button
                @click="deletarTarefa(tarefa.id)"
                type="button"
                style="width: 30px"
                class="btn btn-danger btn-sm"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal Adicionar-->
    <div
      class="modal fade"
      id="modalAdd"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nova tarefa</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputTitulo">Titulo</label>
                  <input
                    v-model="tarefa.titulo"
                    class="form-control"
                    id="inputTitulo"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputDescricao">Descrição</label>
                <input
                  v-model="tarefa.descricao"
                  class="form-control"
                  id="inputDescricao"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputState">Status</label>
                  <select
                    v-model="tarefa.status"
                    id="inputState"
                    class="form-control"
                  >
                    <option
                      v-for="(statu, i) in status"
                      :value="statu"
                      :key="i"
                    >
                      {{ statu }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    type="file" multiple
                    v-on:change="onArquivos"
                    class="form-check-input"
                    id="gridCheck"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="adicionarTarefa"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Editar-->
    <div
      class="modal fade"
      id="modalEdit"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar tarefa</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputTitulo">Titulo</label>
                  <input
                    v-model="tarefaData.titulo"
                    class="form-control"
                    id="inputTitulo"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputDescricao">Descrição</label>
                <input
                  v-model="tarefaData.descricao"
                  class="form-control"
                  id="inputDescricao"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputState">Status</label>
                  <select
                    v-model="tarefaData.status"
                    id="inputState"
                    class="form-control"
                  >
                    <option
                      v-for="(statu, i) in status"
                      :value="statu"
                      :key="i"
                    >
                      {{ statu }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="file" id="gridCheck" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-primary" @click="editarTarefa">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["tarefas", "status"]),
  name: "App",
  components: {},
  data() {
    return {
      tarefa: {},
      arquivos: null,
      tarefaData: {},
    };
  },
  created() {
    // this.$store.commit("listarTarefas");
    this.$store.dispatch("listarTarefas");
  },

  methods: {
    setarTarefaEditar(tarefa) {
      this.tarefaData = Object.assign({}, tarefa);
    },
    adicionarTarefa() {
      const data = {
        tarefa: this.tarefa,
        arquivos: this.arquivos,
      };
      this.$store.dispatch("adicionarTarefa", data);
    },
    deletarTarefa(tarefaId) {
      this.$store.dispatch("deletarTarefa", tarefaId);
    },
    editarTarefa() {
      this.$store.dispatch("editarTarefa", this.tarefaData);
    },
    onArquivos(e) {
      this.arquivos = e.target.files;
    },
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#btn_add,
.form_add_tarefa {
  display: flex;
  justify-content: left;
  text-align: left;
}
</style>
