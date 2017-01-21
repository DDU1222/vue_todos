// import _ from 'lodash';
import "./style.scss";
import Vue from 'vue'


new Vue({
    el:'#root',
    template: 
    `<div class="body_container">
      <h2 class="todos_label">todos</h2>
      <input type="text" class="todos_input" placeholder="What needs to be done?" v-model="newTodoText" v-on:keyup.enter="create"/>
      <div class="todos_container">
        <ul>
          <li v-for="(todo, index) in todos">
            <input class="toggle" type="checkbox" />
            <span>{{todo.content}}</span>
            <i class="delete" v-on:click="$emit(todos.splice(index, 1));count --">x</i>
          </li>
        </ul>
        <div class="container_feature">
          <span>{{count}} items left</span>
        </div>
    </div>`,

    data: {
      count: 0,
      newTodoText: '',
      todos: []
    },
    methods: {
      create: function () {
        this.count ++;
        this.todos = [...this.todos,{"id": this.todos.length, "content": this.newTodoText, "status": false}]
        this.newTodoText = '';
      },
      delete: function (index) {
        console.log(index)
        this.count --;
        $emit(this.todos.splice(index, 1))
      }
    }
});

