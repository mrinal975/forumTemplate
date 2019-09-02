<template>
<div>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item href="/">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" @click="isCardModalActive = true">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                       
                    <section>
                    <a class=" is-primary is-medium"
                        @click="isComponentModalActive = true">
                        Login
                    </a>

                    <b-modal :active.sync="isComponentModalActive"
                        has-modal-card full-screen :can-cancel="false">
                        <modal-form v-bind="formProps"></modal-form>
                    </b-modal>
                </section>
                    </a>

                </div>
                    </b-navbar-item>
                        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="/static/img/placeholder-1280x960.png" alt="Image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src="/static/img/placeholder-1280x960.png" alt="Image">
                                        </figure>
                                    </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a>#css</a> <a>#responsive</a>
                                <br>
                                <small>11:09 PM - 1 Jan 2016</small>
                            </div>
                        </div>
                    </div>
            </b-modal>
        </template>
        
    </b-navbar>
</div>
</template>
<script>
    const ModalForm = {
        props: ['email', 'password'],
        template: `
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Welcome</p>
                </header>
                <section class="modal-card-body">
                    <div class="columns"">
                        <div class="column is-one-third">
                        </div>

                        <div class="column">
                            <b-input placeholder="Email" rounded></b-input>
                            </b-field>

                            <b-field label="Password">
                                <b-input
                                    type="password"
                                    rounded
                                    placeholder="Your password"
                                    required>
                                </b-input>
                            </b-field>

                            <b-checkbox>Remember me</b-checkbox>
                        </div>
                        <div class="column"></div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-primary">Login</button>
                </footer>
            </div>
        `
    }

    export default {
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: false,
                isCardModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    }
</script>