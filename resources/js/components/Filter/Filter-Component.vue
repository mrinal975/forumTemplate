<template>
        <div class="columns">
        <div class="column is-one-third">
          
            <b-dropdown
                aria-role="list">
                <button class="button is-link" type="button" slot="trigger">
                    <span>Selected </span>
                    <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item value="option1" aria-role="listitem">
                    <span>Option 1</span>
                </b-dropdown-item>

                <b-dropdown-item value="option2" aria-role="listitem">
                    <span>Option 2</span>
                </b-dropdown-item>

                <b-dropdown-item value="option3" aria-role="listitem">
                    <span>Option 3</span>
                </b-dropdown-item>
            </b-dropdown>
            <b-dropdown
                aria-role="list">
                <button class="button is-link" type="button" slot="trigger">
                    <span>All</span>
                    <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item value="option1" aria-role="listitem">
                    <span>Option 1</span>
                </b-dropdown-item>

                <b-dropdown-item value="option2" aria-role="listitem">
                    <span>Option 2</span>
                </b-dropdown-item>

                <b-dropdown-item value="option3" aria-role="listitem">
                    <span>Option 3</span>
                </b-dropdown-item>
            </b-dropdown>
        </div>
        <div class="column"></div>
        <div class="column">
        <section>
            <b-field label="">
                <b-autocomplete
                    rounded
                    placeholder="Watcha looking for?"
                    icon="magnify">
                    <template slot="empty">No results found</template>
                </b-autocomplete>
            </b-field>
        </section>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Filter COmponent.')
        }
    }
</script>