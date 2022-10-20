<template>
    <vs-dialog v-model="active" blur>
        <FileUploader></FileUploader>
    </vs-dialog>
</template>

<script>
export default {
    props: ['show'],
    data: () => ({
        active: false,
    }),
    watch: {
        active(val) {
            this.$emit('update:show', val)
        },
        show(val) {
            this.active = val
        }
    },
    mounted() {
        this.active = this.show
    }
    
}
</script>

<style lang="stylus" scoped>

</style>