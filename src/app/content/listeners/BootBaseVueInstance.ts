import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import { Listener, Param } from '@exteranto/core'

import { AppBootedEvent } from '@exteranto/core'

export class BootBaseVueInstance implements Listener {
  /**
   * The application name.
   */
  @Param('app.name')
  private name: string

  /**
   * Handle the fired event.
   *
   * @param event The event instance
   */
  public handle (event: AppBootedEvent) : void {
    const component: Vue = new Vue({
      router,
      render: h => h(App),
    }).$mount(`#${this.name}`)

    document.querySelector('body').appendChild(component.$el)
  }
}
