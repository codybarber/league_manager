<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="row text-left">
          <h2>&nbsp;&nbsp;&nbsp;CDH League Leaders</h2>
        </div>
      </div>
    </div>
    <hr>
    <ul class="nav nav-tabs">
      <li role="presentation" class="team-nav" :class="currenttab == 'player' ? 'active' : ''">
        <a @click="change_tab('player')">Player</a>
      </li>
      <li role="presentation" class="team-nav" :class="currenttab == 'team' ? 'active' : ''">
        <a @click="change_tab('team')">Team</a>
      </li>
    </ul>
    <span class="pull-right">Stats Last Updated: {{lastupdated}}</span>
    <br>
    <template v-if="currenttab =='player'">
      <data-tables :data="rows">
        <el-table-column
          v-for="playercol in columns"
          :fit="true"
          :prop="playercol.prop"
          :label="playercol.label"
          sortable="custom"
          min-width="125px"
          :show-overflow-tooltip="true"
          align="center"
          :fixed="playercol.label == 'Name' ? true : false"
          >
        </el-table-column>
      </data-tables>
    </template>
    <template v-if="currenttab =='team'">
      <!-- <highcharts :options="options"></highcharts> -->
      <data-tables :data="teamrows">
        <el-table-column
          v-for="col in teamcolumns"
          :prop="col.prop"
          :label="col.label"
          sortable="custom"
          min-width="125px"
          :show-overflow-tooltip="true"
          align="center"
          :fixed="col.label == 'Name' ? true : false"
          >
        </el-table-column>
      </data-tables>
    </template>
  </div>
</template>

<script>
    import GetSheetDone from 'get-sheet-done';
    export default {
      name: 'leader-page',
      data() {
        return {
          currenttab: 'player',
          rows: [],
          teamrows: [],
          playerrows: [],
          lastupdated: '',
          chartitle: 'Team Average',
          ytitle: 'Average',
          chartavg: [],
          charthit: [],
          charthr: [],
          chartrbi: [],
          teamcolumns: [
            {
              prop: 'name',
              label: 'Name'
            },
            {
              prop: 'ab',
              label: 'AB'
            },
            {
              prop: 'avg',
              label: 'AVG'
            },
            {
              prop: 'hr',
              label: 'HR'
            },
            {
              prop: 'h',
              label: 'H'
            },
            {
              prop: 'rbi',
              label: 'RBI'
            },
            {
              prop: 'r',
              label: 'R'
            },
            {
              prop: 'obp',
              label: 'OBP'
            },
            {
              prop: 'babip',
              label: 'BABIP'
            },
            {
              prop: 'ops',
              label: 'OPS'
            },
            {
              prop: 'k',
              label: 'K'
            },
            {
              prop: 'k_2',
              label: 'K%'
            },
            {
              prop: 'bb',
              label: 'BB'
            },
            {
              prop: 'avgrisp',
              label: 'AVG RISP'
            }
          ],
          columns: [
            {
              prop: 'name',
              label: 'Name'
            },
            {
              prop: 'pos',
              label: 'Pos.'
            },
            {
              prop: 'g',
              label: 'G'
            },
            {
              prop: 'ab',
              label: 'AB'
            },
            {
              prop: 'avg',
              label: 'AVG'
            },
            {
              prop: 'hr',
              label: 'HR'
            },
            {
              prop: 'h',
              label: 'H'
            },
            {
              prop: 'rbi',
              label: 'RBI'
            },
            {
              prop: 'r',
              label: 'R'
            },
            {
              prop: 'obp',
              label: 'OBP'
            },
            {
              prop: 'babip',
              label: 'BABIP'
            },
            {
              prop: 'ops',
              label: 'OPS'
            },
            {
              prop: 'k',
              label: 'K'
            },
            {
              prop: 'k_2',
              label: 'K%'
            },
            {
              prop: 'bb',
              label: 'BB'
            },
            {
              prop: 'avgrisp',
              label: 'AVG RISP'
            }
          ],
          options: {
            chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Angels',
            'Blue Jays',
            'Braves',
            'Brewers',
            'Cubs',
            'Dodgers',
            'Giants',
            'Indians',
            'Mariners',
            'Marlins',
            'Mets',
            'Orioles',
            'Phillies',
            'Pirates',
            'Tigers',
            'Yankees'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'AVG',
        data: this.chartavg

    }, {
        name: 'HR',
        data: this.charthr

    }, {
        name: 'Hits',
        data: this.charthit

    }, {
        name: 'RBI',
        data: this.chartrbi

    }]
          }
        }
      },
      methods: {
        change_tab: function(tab) {
          this.currenttab = tab;
        },
        cap_string: function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
      },
      mounted() {
        let current = window.location.pathname;
        if (current.indexOf('roster') > 0) {
          this.currenttab = 'roster';
        }
        if (current.indexOf('stats') > 0) {
          this.currenttab = 'stats';
        }
        if (current.indexOf('schedule') > 0) {
          this.currenttab = 'schedule';
        }
        GetSheetDone.labeledCols('1zTi88n9FMEvhEz3oAgTDVZBzXNzeH5-SKV_QCXy9Ze4').then(sheet => {
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
            if (data[i].team != 'team') {
              if (data[i].ab > 30) {
                this.lastupdated = data[i].lastupdated;
                data[i].avg = data[i].avg.toFixed(3);
                data[i].obp = data[i].obp.toFixed(3);
                data[i].babip = data[i].babip.toFixed(3);
                data[i].ops = data[i].ops.toFixed(3);
                this.rows.push(data[i]);
              }
            } else if (data[i].team == 'team') {
              data[i].avg = data[i].avg.toFixed(3);
              data[i].obp = data[i].obp.toFixed(3);
              data[i].babip = data[i].babip.toFixed(3);
              data[i].ops = data[i].ops.toFixed(3);
              this.lastupdated = data[i].lastupdated;
              this.teamrows.push(data[i]);
              this.chartavg.push(Number(data[i].avg));
              this.charthit.push(Number(data[i].h));
              this.charthr.push(Number(data[i].hr));
              this.charthr.push(Number(data[i].rbi));
            }
          }
        })
      },
      props: {
        team: {
          type: String
        },
        teamdisplay: {
          type: String
        },
        logo: {
          type: String
        },
        user: {
          type: String
        },
        twitch: {
          type: String
        }
      },
      components: {

      }
    }
</script>
