import VueMultiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';

export const SELECT_CLASS_PREFIX = 'select-';

const Select = defineComponent({
    name: 'Select',
    components: {
        VueMultiselect,
    },
    props: {
        id: {
            type: String,
            default: '',
        },
        // Options in the select
        options: {
            type: [Array, Object],
            required: true,
        },
        // v-model
        modelValue: {
            type: [String, Number, Array, Object],
            default: '',
        },
        // trackby is for selected value
        trackBy: {
            type: String,
            default: 'id',
        },
        // Label from option Object, that will be visible in the dropdown.
        label: {
            type: String,
            default: 'label',
        },
        placeholder: {
            type: String,
            default: '',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        searchable: {
            type: Boolean,
            default: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        allowEmpty: {
            type: Boolean,
            default: true,
        },
        showCount: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const currentSelect = ref<any | null>(null);
        const customSearch = ref<any | null>(null);

        const isOpen = ref<boolean>(false);
        const selected = ref<any>(props.modelValue);

        const selectClasses = computed<Array<string | object>>(() => {
            return [
                { [SELECT_CLASS_PREFIX + 'multiple']: !!props.multiple },
                { [SELECT_CLASS_PREFIX + 'search']: !!props.searchable },
                { [SELECT_CLASS_PREFIX + 'open']: !!isOpen.value },
                props.searchable ? 'cursor-text' : 'cursor-default',
            ];
        });

        const removeElement = (index: number) => {
            if (index > 0) {
                selected.value.splice(index, 1);
            } else {
                selected.value = [];
            }

            nextTick(() => {
                // Send updated selected value to parent
                emit('update:modelValue', selected.value);
            });
        };

        const onUpdateValue = (event: any) => {
            emit('update:modelValue', event);
        };

        return {
            // refs
            customSearch,
            currentSelect,
            selected,
            isOpen,

            // computed
            selectClasses,

            // methods
            onUpdateValue,
            removeElement,
        };
    },
});

export default Select;
