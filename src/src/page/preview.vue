<template>
  <div>
    <div class="preview">
      <div class="arrange">第{{amount}}/{{all_number}}题</div>

      <div class="problem">
        <div class="count-down">
          7s
        </div>
        <!--倒计时-->

        <div class="Description">
          <span style="color:#AAAAAA ;">[单选题]</span> {{ time_headline }}
        </div>
        <div v-if="tyapo == 'A'">
          <div
            class="selectivity"
            v-for="(itema, index) in datalist"
            :key="index"
            :class="[itema.isAnswer == '1' ? 'mistake' : 'correct']"
          >
            <span class="options">{{ index | getSort }}、</span>
            <div class="result">{{ itema.answerOption }}</div>
          </div>
        </div>

        <div v-else class="afghj">
          <div
            class="photograph"
            v-for="(itemx, index) in databcd"
            :key="index"
          >
            <div class="picture">
              <img :src="itemx.picture" alt="" />
            </div>
            <div :class="[itemx.isAnswer == '1' ? 'mistakecf' : 'correctcf']">
              <span class="options">{{ index | getSort }}、</span>
              <span>{{ itemx.answerOption }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--题目顺序-->

    <div class="sortord">
      <!-- 题目顺序 -->

      <el-table
        :data="tableData"
        @row-click="openDetails"
        :row-class-name="tableRowClassName"
        height="320"
        style="width: 100%;cursor:pointer;"
      >
        <el-table-column prop="question" label="题目排序"> </el-table-column>
        <el-table-column label="操作" align="center" fixed="right" width="80">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-top"
              @click="handleUp(scope.$index, scope.row)"
            >
            </el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-bottom"
              @click="handleDown(scope.$index, scope.row)"
            >
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { OVW_information } from "../http/api";

export default {
  name: "preview",
  data() {
    return {
      tableData: [],
      movement_id: null,
      time_headline: "",
      datalist: [],
      serializable: null,
      tyapo: "A",
      databcd: [],
      amount:1,
      all_number:0
    };
  },

  methods: {
    openDetails(row, event, column,tableData) {
      this.amount = (row.index)+1
      this.answer_to_show(row.itemId);
    },

tableRowClassName ({row, rowIndex}) {
     row.index = rowIndex;
    },

    //答题小屏幕展示
    async answer_to_show(id) {
      try {
        const res = await OVW_information.respondent({
          id
        });
        if (res.status == "SUCCESS") {
          let kasdt = res.data;
          this.time_headline = kasdt.question;
          this.datalist = kasdt.options;

          if (this.datalist[0].picture == "") {
            this.tyapo = "A";
          } else {
            this.tyapo = "B";
            this.databcd = kasdt.options;
          }
        }
      } catch (e) {
        this.$message.error("服务器报错,请查看");
      }
    },
    //答题顺序展示
    async examination() {
      this.tableData = [];
      try {
        const res = await OVW_information.Answerquestions({});
        if (res.status == "SUCCESS") {
          let kst = res.data;
          this.all_number = kst.length
          this.serializable = kst[0].itemId;
          let kiop = this.serializable;
          this.answer_to_show(kiop);
          for (let i = 0; i < kst.length; i++) {
            kst[i].question = kst[i].sort + "、" + kst[i].question;
          }
          this.tableData = kst;
        }
      } catch (e) {
        this.$message.error("服务器报错,请查看");
      }
    },

    //点击移动接口
    async ranking(a, b) {
      try {
        const res = await OVW_information.sortord({
          itemId: a,
          upOrDown: b
        });

        if (res.status == "IS_LAST") {
          this.$message.error(res.message);
        } else if (res.status == "IS_FIRST") {
          this.$message.error(res.message);
        }
        this.examination();
      } catch (e) {
        console.log(e);
        this.$message.error("服务器异常，请稍后再试");
      }
    },

    //上移
    handleUp(index, row) {
      this.movement_id = 1;
      this.ranking(row.itemId, this.movement_id);
    },
    //下移
    handleDown(index, row) {
      this.movement_id = 0;
      this.ranking(row.itemId, this.movement_id);
    }
  },
  filters: {
    getSort(index) {
      return String.fromCharCode(64 + parseInt(index + 1));
    }
  },

  mounted() {
    this.examination();
  }
};
</script>
<style scoped>
.preview {
  width: 100%;
  background-image: url("../../static/img/yulan.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 2.3rem;
}

.sortord {
  width: 100%;
  background-color: #eeeeee;
  padding-top: 1rem;
}

.arrange {
  color: #ffffff;
  font-size: 0.8rem;
  padding: 1rem;
}

.problem {
  width: 88%;
  background-color: #ffffff;
  margin: 1rem auto;
  border-radius: 0.5rem;
  position: relative;
  border: solid 0.1rem #ffffff;
  padding: 2.3rem 0rem 1rem 0rem;
}

.count-down {
  position: absolute;
  padding: 1rem;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  left: 40%;
  top: -2rem;
  border: solid 1px #24a9bd;
  background-color: #ffffff;
}

.Description {
  margin: 0rem 0 0 1.8rem;
  width: 82%;
  word-break: break-all;
}

.selectivity {
  width: 80%;
  margin: 1rem auto;
  border-radius: 1.1rem;
  padding: 0.4rem;
  display: flex;
}

.correct {
  background: #f0f0f0;
  color: #333333;
}

.mistake {
  background: linear-gradient(to right, #4dbaff, #0577ea);
  color: #eeeeee;
}

.mistakecf {
  color: #0577ea;
  text-align: center;
  font-size: 0.8rem;
}


.options {
  margin-left: 1rem;
}

.result {
width: 90%;
text-align: center;
}

.el-table.el-table--fit.el-table--scrollable-y.el-table--enable-row-transition {
  border-radius: 0.3rem;
}

.afghj {
  width: 92%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
}

.photograph {
  width: 8rem;
  margin: 0.4rem auto;
}

.picture {
  width: 100%;
  height: 6rem;
}

.picture > img {
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
}

.el-table--enable-row-transition .el-table__body td  {
  cursor:pointer;
}

.correctcf{
  font-size: 0.8rem;
  padding: 0.3rem 0rem;
  margin-top: 0.4rem;
}
</style>
