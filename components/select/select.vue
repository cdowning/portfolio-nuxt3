<template>
    <div class="select-container">
        <vue-multiselect
            :id="id"
            ref="currentSelect"
            v-model="selected"
            :options="options"
            :searchable="searchable"
            :multiple="multiple"
            :label="label"
            :track-by="trackBy"
            :class="['select rounded', selectClasses]"
            :disabled="disabled"
            :allow-empty="allowEmpty"
            :clear-on-select="true"
            :close-on-select="!multiple"
            :placeholder="placeholder"
            :preserve-search="true"
            :reset-after="false"
            :prevent-autofocus="false"
            deselect-label=""
            selected-label=""
            select-label=""
            @update:model-value="onUpdateValue($event)"
            @open="isOpen = true"
            @close="isOpen = false"
        >
            <!-- caret indicator on the right -->
            <template #caret="{ toggle }">
                <Icon icon="caret-down" size="sm" @mousedown.prevent="toggle" />
            </template>

            <!-- Shows up for searchable selects that do not have taggable set to true -->
            <template #noResult> No results found </template>

            <!-- This is for regular dropdowns -->
            <!-- Modify this slot to handle icons if passed like the ones below -->
            <!-- <template #singleLabel="{ option }"> {{ option }}</template> -->

            <!-- Slot that is used for selected values -->
            <template #selection="{ values }">
                <div
                    class="tag-container"
                    :class="[{ 'mb-3': isOpen && values.length }]"
                >
                    <div
                        v-for="(value, index) in values"
                        :key="index"
                        class="tag tag-primary pl-3 pr-1 py-1 m-0 flex items-center"
                    >
                        <!-- If selected option needs to show icon -->
                        <Icon
                            v-if="value.icon"
                            :icon="value.icon"
                            class="tag-icon mr-1"
                            size="sm"
                        />
                        <span>{{ value.label }}</span>

                        <div
                            class="tag-remove ml-2 p-1 cursor-pointer flex items-center"
                        >
                            <Icon
                                icon="close"
                                color="white"
                                type="line"
                                size="xxs"
                                @click="removeElement(index)"
                            />
                        </div>
                    </div>
                </div>
            </template>

            <!-- Slot for custom option template. See example(https://vue-multiselect.js.org/#sub-custom-option-template). Default: Shows option label -->
            <!-- option list -->
            <template #option="{ option }">
                <Icon
                    v-if="option.icon"
                    :icon="option.icon"
                    class="option-icon mr-1"
                    size="sm"
                />
                <span class="option-label grow">
                    {{ option.label }}
                </span>
                <span>
                    <Icon icon="check" color="teal-30" size="xxs" class="p-1" />
                </span>
            </template>

            <template v-if="showCount && multiple" #afterList>
                <div class="flex px-3 py-2 text-gray-20 text-sm">
                    {{ selected ? selected.length : 0 }} options selected
                </div>
            </template>
        </vue-multiselect>
    </div>
</template>

<script lang="ts" src="./select.ts"></script>
<style src="./select.scss" lang="scss" scoped></style>
<style src="../tag/tag.scss" lang="scss" scoped></style>
