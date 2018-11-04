<template>
    <div :style="getDisp">
        layout(app.vue) {{ message }}
        <a href="http://localhost:64393/?viewname=Contact">リンク</a>
        <ul>
            <li v-for="a in list">{{a}}</li>
        </ul>
        <input type="text" v-model="count" /><button @click="getListData">押せ</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        created: function() {
            const self = this;

            const a = () => {
                axios.post("/Home/List", { count: 12 })
                    .then((res) => {
                        self.list = res.data;
                        self.disp = true;
                    });
/*
                new Promise((resolve, reject) => {
                    axios.post("/Home/List", { count: 12 })
                        .then((res) => {
                            self.list = res.data;
                            resolve();
                        });
                });
*/
            }

            a();
        },

        mounted: function () {
        },

        methods: {
            getListData: function () {
                const self = this;
                axios.post("/Home/List", { count: self.count })
                    .then((res) => {
                        self.list = res.data;
                        self.disp = true;
                    });
            }
        },

        computed: {
            getDisp: function () {
                return this.disp ? { display: 'block' } : { display: 'none' };
            }
        },

        data: function () {
            return {
                message: "(^_-)-☆",
                list: [],
                count: 0,

                disp: false
            }
        }
    }
</script>

