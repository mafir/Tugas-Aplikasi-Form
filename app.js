Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', kereta: '', penumpang: '', tanggal: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.kereta = "";
            this.data.penumpang = "";
            this.data.tanggal = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        tiket_kereta: {}
    },
    methods: {
        getData: function (value) {
            this.tiket_kereta = {
                nama : value.nama,
                kereta : value.kereta,
                penumpang : value.penumpang,
                tanggal : value.tanggal
            }
        }
    }
})