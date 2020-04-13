<template>
  <Wrapper>
    <datepicker
      v-model="date"
      :language="localizationTr"
      :monday-first="mondayFirst"
      :clear-button="clearButton"
      :open-date="openDate"
      :disabled-dates="disabledDates"
      @selected="selected"
      :input-class="inputClass"
      calendar-button-icon="datepicker-icon icon-calendar-ico"
      clear-button-icon="datepicker-close-icon icon-close"
      calendar-button
      v-bind="$attrs"
    >
    </datepicker>
  </Wrapper>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { Box } from "./Box";
import { tr } from "vuejs-datepicker/dist/locale";

const Link = Box.extend`
  .vdp-datepicker {
    margin-top: 30px;
    margin-left: 20px;
    border: 1px solid;
  }
`;

const Wrapper = Link.withComponent("span");

export default {
  name: "ScDatePicker",
  components: {
    Datepicker,
    Wrapper
  },
  props: {
    value: {
      default: null
    },
    mondayFirst: {
      type: Boolean,
      default: true
    },
    clearButton: {
      type: Boolean,
      default: true
    },
    disabledDates: {
      default: () => {}
    },
    openDate: {
      default: null
    },
    inputClass: {
      type: String,
      default: "form-control"
    }
  },
  data() {
    return {
      date: null,
      localizationTr: tr
    };
  },
  methods: {
    selected(selectedDate) {
      this.$emit("input", selectedDate);
    }
  },
  created() {
    this.date = this.value;
  },
  watch: {
    value() {
      this.date = this.value;
    }
  }
};
</script>
