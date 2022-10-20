<template>
    <div class="smart-bar">
        <div class="container">
            <transition-group name="fade">
                <BarButton key="user" @click.native="$router.push('/user')" color="skype" type="solid" icon="user"
                    tip="View personal page"></BarButton>

                <BarButton key="home" @click.native="$store.commit('backRoot')" v-if="!isRoot" color="reddit"
                    type="solid" icon="home" tip="Back to homepage"></BarButton>

                <BarButton key="back" v-if="!isRoot" @click.native="$store.dispatch('backToPervPage')" color="discord"
                    type="solid" icon="chevron-left-circle" tip="Back to previous page"></BarButton>


                <ColDivider key="divider1"></ColDivider>

                <BarButton @click.native="$emit('handleUploadFile')" key="upload" color="defalut" type="solid" icon="cloud-upload" tip="Upload file"></BarButton>

                <BarButton @click.native="$emit('handleCreateFolder')" key="folder" color="amazon" type="solid" icon="folder-plus" tip="Create folder"></BarButton>

                <BarButton @click.native="$emit('refresh')" key="refresh" color="google-plus" icon="refresh"
                    tip="Refresh"></BarButton>

                <template v-if="selectedType">
                    <ColDivider key="divider2"></ColDivider>

                    <template v-if="selectedType !== 'folder'">

                        <BarButton @click.native="$emit('handleDownload')" key="download" color="medium" type="solid" icon="cloud-download" tip="Download file">
                        </BarButton>

                        <BarButton @click.native="$emit('handleCopyUrl')" key="copy" color="messenger" type="solid" icon="copy" tip="Copy file url">
                        </BarButton>
                    </template>

                    <BarButton @click.native="$emit('openFolder')" key="open" v-if="selectedType === 'folder'"
                        color="messenger" type="solid" icon="folder-open" tip="Open folder"></BarButton>

                    <BarButton @click.native="$emit('handleRename')" key="rename" color="dribbble" type="solid" icon="rename" tip="Rename item"></BarButton>

                    <BarButton @click.native="$emit('handleDelete')" key="delete" color="youtube" type="solid" icon="trash" tip="Delete item"></BarButton>

                    <vs-button key="close" circle icon transparent @click="$emit('clear')">
                        <box-icon name='chevron-left' color="#ccc"></box-icon>
                    </vs-button>
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BarButton from './components/BarButton.vue'
export default {
    props: ["selectedType", "backActive"],
    components: { BarButton },
    computed: {
        ...mapGetters(['isRoot'])
    },
}
</script>

<style lang="stylus" scoped>
    .smart-bar
        position relative
        display flex
        justify-content center
        
        .container
            padding 6px
            display flex
            background var(--vs-light)
            box-shadow rgba(100, 100, 111, 0.2) 0px 2px 29px 0px;
            border-radius 12px

            span
                display flex

            .fade-enter-active 
                transition all .5s ease

            .fade-leave-active 
                display none

            .fade-enter
                opacity 0
                transform translateY(12px)
</style>