<template>
  <div class="container-fluid">
    <div class="panel panel-default" v-if="announcementrows.length > 0">
      <div class="panel-heading">
        <h3 class="panel-title">Announcements</h3>
      </div>
      <div class="panel-body">
        <div v-for="announcement in announcementrows">
          <div class="alert" :class="'alert-' + announcement.type" role="alert">
            <strong>{{announcement.from}} say: </strong> <br><h3>{{announcement.message}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Standings</h3>
      </div>
      <div class="panel-body">
        <div class="table-responsive">
        <table class="table table-striped table-condensed table-responsive">
          <thead>
            <th class="text-center">Rank</th>
            <th class="text-center">Team</th>
            <th class="text-center">Owner</th>
            <th class="text-center">W</th>
            <th class="text-center">L</th>
            <th class="text-center">GB</th>
            <th class="text-center">GL</th>
            <th class="text-center">Run Diff.</th>
            <th class="text-center">Win %</th>
          </thead>
          <tbody>
            <tr v-for="(row, index) in standingrows">
              <td>{{row.rank}}</td>
              <td>
                <router-link :to="{ name: cap_string(row.name)}">
                  <span> {{cap_string(row.name)}}</span>
                </router-link>
              </td>
              <td>{{row.owner}}</td>
              <td>{{row.w}}</td>
              <td>{{row.l}}</td>
              <td>{{row.gb}}</td>
              <td :class="[row.gl > 20 ? 'danger' : '']">{{row.gl}}</td>
              <td>{{row.rundiff}}</td>
              <td>{{(row.winperc).toFixed(3)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
    import GetSheetDone from 'get-sheet-done';
    export default {
      data() {
        return {
          announcementrows: [],
          standingrows: []
        }
      },
      methods: {
        cap_string: function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
      },
      mounted() {
        let current = window.location.pathname;
        GetSheetDone.labeledCols('1bKlLeGeAy3JuzYJhxRWUDrt_kus-XPVoL8TeomV0ufU').then(sheet => {
          let data = sheet.data;
          for(var i = 0; i < data.length; i++){
            var obj = data[i];
            for(var prop in obj){
              if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                obj[prop] = +obj[prop];
              }
            }
          }
          for (let i = 0; i < data.length; i++) {
            this.standingrows.push(data[i]);
          }
        })
        GetSheetDone.labeledCols('1vVdnsG527_6x4N7_vqalX1Y9GNdRT4k_Ndny_t4Uza8').then(sheet => {
          let announcementdata = sheet.data;
          console.log(announcementdata)
          for (let i = 0; i < announcementdata.length; i++) {
            this.announcementrows.push(announcementdata[i]);
          }
        })
      }
    }
</script>
