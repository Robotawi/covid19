<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">
        {{ headerItem.title }}
      </page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }} </span>
        <time :datetime="updatedAt">{{ updatedTimeStr }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }} </span>
      </div>
    </div>
    <!--<whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />-->
    <v-row class="DataBlock">
      <confirmed-cases-details-card />
      <!--<tested-cases-details-card />-->
      <confirmed-cases-number-card />
      <confirmed-cases-attributes-card />
      <!--<inspection-persons-number-card />-->
      <tested-number-card />
      <!--<telephone-advisory-reports-number-card />
      <consultation-desk-reports-number-card />
      <metro-card />
      <agency-card />
      <shinjuku-visitors-card />
      <chiyoda-visitors-card />-->
      <patients-by-age />
      <patients-by-clusters />
      <patients-and-sickbeds />
    </v-row>
    <!--<v-divider />
    <v-row class="DataBlock">
      <shinjuku-st-map-card />
      <tokyo-st-map-card />
    </v-row>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
// import WhatsNew from '@/components/WhatsNew.vue'
// import StaticInfo from '@/components/StaticInfo.vue'
import lastUpdate from '@/data/last_update.json'
import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
/* import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue' */
import PatientsByAge from '@/components/cards/PatientsByAge.vue'
import PatientsByClusters from '@/components/cards/PatientsByClusters.vue'
import PatientsAndSickbeds from '@/components/cards/PatientsAndSickbeds.vue'
// import MetroCard from '@/components/cards/MetroCard.vue'
// import AgencyCard from '@/components/cards/AgencyCard.vue'
import { convertISO8601FormatToDatetime } from '@/utils/formatDate'
/* import ShinjukuVisitorsCard from '@/components/cards/ShinjukuVisitorsCard.vue'
import ChiyodaVisitorsCard from '@/components/cards/ChiyodaVisitorsCard.vue'
import ShinjukuStMapCard from '@/components/cards/ShinjukuStMapCard.vue'
import TokyoStMapCard from '@/components/cards/TokyoStMapCard.vue' */

export default Vue.extend({
  components: {
    PageHeader,
    // WhatsNew,
    // StaticInfo,
    ConfirmedCasesDetailsCard,
    // TestedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    /* InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard,
    ShinjukuVisitorsCard,
    ChiyodaVisitorsCard,
    ShinjukuStMapCard,
    TokyoStMapCard */
    PatientsByAge,
    PatientsByClusters,
    PatientsAndSickbeds
  },
  data() {
    const updatedTimeStr = convertISO8601FormatToDatetime(
      lastUpdate.last_update
    )
    const data = {
      updatedTimeStr,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('兵庫県内の最新感染動向')
      },
      newsItems: News.newsItems
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertISO8601FormatToDatetime(lastUpdate.last_update)
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('兵庫県内の最新感染動向') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }

      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
