<template>
    <div data-testid="item-container">
        <li v-if="featureCount.flag == false">
            <input type="checkbox" data-testid="btn-thingUnDo" @click="chooseItem()" />
            <p class="p-1" data="thingUnDo">1.{{ featureCount.note }}</p>
            <a>-</a>
        </li>
        <li v-if="featureCount.flag == true">
            <input type="checkbox" data-testid="btn-thingDo" checked="checked" @click="chooseItem()" />
            <p class="p-1" data="thingDo">2.{{ featureCount.note }}</p>
            <a>-</a>
        </li>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { lines } from '../types/index';
import { PropType } from 'vue';

@Component
export default class ListItem extends Vue {
 
    // @Prop() private row?: lines;
    @Prop() private row!:lines

    mounted(): void {

    }

    // 计算属性
    get featureCount(): lines { 
        return this.row 
    }


    chooseItem() {
        if (this.featureCount.flag == true) {
            this.doingThing();
        } else {
            this.undoingThing();
        }
    }

    @Emit()
    doingThing() {
        return this.featureCount;
    }
    @Emit()
    undoingThing() {
        return this.featureCount;
    }
}
</script>
<style scoped>
.p-1 {
    text-align: left;
}
 
</style>