<template>
  <div class="object-div">
    <!-- 答题页预览 -->
    <div class="answer-div">
      <preview ref="pre"></preview>
    </div>
    <div class="operation-div">
      <!-- 顶部标签栏 -->
      <div class="left-menu-view" scroll-y="true" :scroll-left="scrollLeft2">
        <div v-for="(menu2Tab, menu2index) in menuTabs2" :key="menu2index">
          <div
            :class="[
              currentTab2 == menu2index ? 'menu-one-view-act' : 'menu-one-view'
            ]"
            class="menu-one-view"
            @tap="getRightList(menu2index, menu2Tab)"
            v-bind:id="'tabNum2' + menu2index"
            @click="swichMenu2(menu2index)"
          >
            <div
              :class="[currentTab2 == menu2index ? 'menu-one-act' : 'menu-one']"
            >
              <div class="menu-one-txt" style="cursor:pointer;">
                {{ menu2Tab.name }}
              </div>
            </div>
          </div>
        </div>
        <!-- <div style="width: 6.25rem; height: 2.25rem; background: #0F71DF; border-radius: 0rem;">提交</div> -->
      </div>
      <!-- 信息总览 -->
      <div v-show="od == 0">
        <div class="top">
          <!-- 参与人数 -->
          <div class="cyrs">
            <div
              style="font-size:1rem;color: #999999;margin-left: 1.56rem;margin-top: 1.25rem;"
            >
              参与人数
            </div>
            <div
              style="font-size: 2.25rem;color: #333333;margin-top: 1.7rem;margin-left: 7rem;font-weight: bold;"
            >
              {{ amount_to.totalPeople
              }}<span
                style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                >人</span
              >
            </div>
            <div
              style="width:20rem;height:0.06rem;background: #EEEEEE;margin-left: 1.88rem;margin-top: 1.75rem;"
            ></div>
            <div style="display: flex;">
              <div>
                <div style="width: 10rem;display: flex;margin-left: 1.88rem;">
                  <div
                    style="width:0.5rem;height:0.5rem;background:#80C269;border-radius:50%;margin-left: 1.19rem;margin-top: 1.69rem;"
                  ></div>
                  <div
                    style="font-size: 1rem;color: #333333;margin-top: 1.2rem;margin-left: 1.19rem;"
                  >
                    昨日参与
                  </div>
                </div>
                <div
                  style="font-size: 1.5rem;color: #333333;font-weight: bold;margin-left: 4rem;margin-top: 0.6rem;"
                >
                  {{ amount_to.yesterdayPeople
                  }}<span
                    style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                    >人</span
                  >
                </div>
              </div>
              <div>
                <div style="width: 10rem;display: flex;">
                  <div
                    style="width:0.5rem;height:0.5rem;background:#E5004F;border-radius:50%;margin-left: 1.19rem;margin-top: 1.69rem;"
                  ></div>
                  <div
                    style="font-size: 1rem;color: #333333;margin-top: 1.2rem;margin-left: 1.19rem;"
                  >
                    今日新增
                  </div>
                </div>
                <div
                  style="font-size: 1.5rem;color: #333333;font-weight: bold;margin-left: 2.3rem;margin-top: 0.6rem;"
                >
                  {{ amount_to.todayPeople
                  }}<span
                    style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                    >人</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- 答题次数 -->
          <div class="dtcs">
            <div
              style="font-size:1rem;color: #999999;margin-left: 1.56rem;margin-top: 1.25rem;"
            >
              答题次数
            </div>
            <div
              style="font-size: 2.25rem;color: #333333;margin-top: 1.7rem;margin-left: 7rem;font-weight: bold;"
            >
              {{ amount_to.totalAnswer
              }}<span
                style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                >次</span
              >
            </div>
            <div
              style="width:20rem;height:0.06rem;background: #EEEEEE;margin-left: 1.88rem;margin-top: 1.75rem;"
            ></div>
            <div style="display: flex;">
              <div>
                <div style="width: 10rem;display: flex;margin-left: 1.88rem;">
                  <div
                    style="width:0.5rem;height:0.5rem;background:#80C269;border-radius:50%;margin-left: 1.19rem;margin-top: 1.69rem;"
                  ></div>
                  <div
                    style="font-size: 1rem;color: #333333;margin-top: 1.2rem;margin-left: 1.19rem;"
                  >
                    昨日答题
                  </div>
                </div>
                <div
                  style="font-size: 1.5rem;color: #333333;font-weight: bold;margin-left: 4rem;margin-top: 0.6rem;"
                >
                  {{ amount_to.yesterdayAnswer
                  }}<span
                    style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                    >人</span
                  >
                </div>
              </div>
              <div>
                <div style="width: 10rem;display: flex;">
                  <div
                    style="width:0.5rem;height:0.5rem;background:#E5004F;border-radius:50%;margin-left: 1.19rem;margin-top: 1.69rem;"
                  ></div>
                  <div
                    style="font-size: 1rem;color: #333333;margin-top: 1.2rem;margin-left: 1.19rem;"
                  >
                    今日新增
                  </div>
                </div>
                <div
                  style="font-size: 1.5rem;color: #333333;font-weight: bold;margin-left: 2.3rem;margin-top: 0.6rem;"
                >
                  {{ amount_to.todayAnswer
                  }}<span
                    style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                    >人</span
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- 奖励提现 -->
          <div class="jltx">
            <div
              style="height: 3rem;width: 17.32rem;display: flex;margin-left: 4.88rem;margin-top: 1.2rem;"
            >
              <div style="line-height: 3rem;font-size: 1rem;color: #999999;">
                奖励提现
              </div>
              <div
                style="font-size: 2.25rem;color: #333333;font-weight: bold;margin-left: 2.19rem;"
              >
                {{ amount_to.totalWithdraw
                }}<span
                  style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                  >元</span
                >
              </div>
            </div>
            <div
              style="height: 3rem;width: 17.32rem;display: flex;margin-left: 4.88rem;margin-top: 0.87rem;"
            >
              <div style="line-height: 3rem;font-size: 1rem;color: #999999;">
                奖金剩余
              </div>
              <div
                style="font-size: 2.25rem;color: #333333;font-weight: bold;margin-left: 2.19rem;"
              >
                {{ amount_to.surplusWithdraw
                }}<span
                  style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                  >元</span
                >
              </div>
            </div>
            <div
              style="width:20rem;height:0.06rem;background: #EEEEEE;margin-left: 1.88rem;margin-top: 0.88rem;"
            ></div>
            <div style="display: flex;">
              <div>
                <div style="width: 10rem;display: flex;margin-left: 1.88rem;">
                  <div
                    style="width:0.5rem;height:0.5rem;background:#80C269;border-radius:50%;margin-left: 1.19rem;margin-top: 1.69rem;"
                  ></div>
                  <div
                    style="font-size: 1rem;color: #333333;margin-top: 1.2rem;margin-left: 1.19rem;"
                  >
                    昨日提现
                  </div>
                </div>
                <div
                  style="font-size: 1.5rem;color: #333333;font-weight: bold;margin-left: 4rem;margin-top: 0.6rem;"
                >
                  {{ amount_to.yesterdayWithdraw
                  }}<span
                    style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                    >元</span
                  >
                </div>
              </div>
              <div>
                <div style="width: 10rem;display: flex;">
                  <div
                    style="width:0.5rem;height:0.5rem;background:#E5004F;border-radius:50%;margin-left: 1.19rem;margin-top: 1.69rem;"
                  ></div>
                  <div
                    style="font-size: 1rem;color: #333333;margin-top: 1.2rem;margin-left: 1.19rem;"
                  >
                    今日提现
                  </div>
                </div>
                <div
                  style="font-size: 1.5rem;color: #333333;font-weight: bold;margin-left: 2.3rem;margin-top: 0.6rem;"
                >
                  {{ amount_to.todayWithdraw
                  }}<span
                    style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                    >元</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="left-div">
            <!-- 月增长 -->
            <div class="yzz">
              <div
                style="font-size: 1.13rem;color: #333333;margin-left: 1.81rem;padding-top: 1.5rem;"
              >
                月增长
              </div>
              <div style="text-align: center; line-height: 9rem;">
                <div>
                  <div
                    style="font-size: 3rem;color: #333333;font-weight: bold;"
                  >
                    {{ amount_to.monthIncrease
                    }}<span
                      style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                      >人</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 季度增长 -->
            <div class="jdzz">
              <div
                style="font-size: 1.13rem;color: #333333;margin-left: 1.81rem;padding-top: 1.5rem;"
              >
                季度增长
              </div>
              <div style="text-align: center; line-height: 9rem;">
                <div>
                  <div
                    style="font-size: 3rem;color: #333333;font-weight: bold;"
                  >
                    {{ amount_to.quarterIncrease
                    }}<span
                      style="font-size: 1rem;color: #999999;font-weight: 400;margin-left: 0.5rem;"
                      >人</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--统计图 图表 -->
          <div class="charts">
            <div style="display: flex;">
              <div
                style="font-size: 1.13rem;color: #333333;margin-left: 1.69rem;margin-top: 1.6rem;"
              >
                统计
              </div>
              <div
                class="left-menu-view2"
                scroll-y="true"
                :scroll-left="scrollLeft3"
              >
                <div
                  v-for="(menu3Tab, menu3index) in menuTabs3"
                  :key="menu3index"
                >
                  <div
                    :class="[
                      currentTab3 == menu3index
                        ? 'menu-one-view-act2'
                        : 'menu-one-view2'
                    ]"
                    class="menu-one-view2"
                    @tap="getRightList(menu3index, menu3Tab)"
                    v-bind:id="'tabNum3' + menu3index"
                    @click="swichMenu3(menu3index)"
                  >
                    <!--答题参与人数-->
                    <div
                      :class="[
                        currentTab3 == menu3index
                          ? 'menu-one-act2'
                          : 'menu-one2'
                      ]"
                    >
                      <div class="menu-one-txt2" style="cursor:pointer;">
                        {{ menu3Tab.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="left-menu-view3"
                scroll-y="true"
                :scroll-left="scrollLeft4"
              >
                <div
                  v-for="(menu4Tab, menu4index) in menuTabs4"
                  :key="menu4index"
                >
                  <div
                    :class="[
                      currentTab4 == menu4index
                        ? 'menu-one-view-act3'
                        : 'menu-one-view3'
                    ]"
                    class="menu-one-view3"
                    @tap="getRightList(menu4index, menu4Tab)"
                    v-bind:id="'tabNum4' + menu4index"
                    @click="swichMenu4(menu4index)"
                  >
                    <!--今日 最近七天 最近30天-->
                    <div
                      :class="[
                        currentTab4 == menu4index
                          ? 'menu-one-act3'
                          : 'menu-one3'
                      ]"
                    >
                      <div class="menu-one-txt3" style="cursor:pointer;">
                        {{ menu4Tab.name }}
                      </div>
                      <div class="menu-one-bottom3">
                        <div class="menu-one-bottom-color3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="myChart"
              :style="{ width: '100%', height: '88.73%' }"
            ></div>
          </div>
        </div>
      </div>
      <!-- 基础设置 -->
      <div v-show="od == 1">
        <div
          style="font-size: 1rem;color: #333333;font-weight: bold;margin-left: 4.19rem;margin-top: 1.38rem; display: flex; justify-content: space-between; width: 89%;"
        >
          基本设置
          <el-button type="primary" @click="Basis_to_submit()">提交</el-button>
        </div>
        <div
          style="width: 68.75rem;height: 0.06rem;background: #EEEEEE;margin-left: 4.19rem;margin-top: 0.35rem;"
        ></div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 0.9rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            活动标题：
          </div>
          <input
            type="text"
            v-model="BASic_SEtting.activityTitle"
            style="width: 56.25rem;height: 2.63rem;line-height: 2.63rem;border: 0.06rem solid #E4E1E1;margin-left: 4.38rem;padding-left: 1.5rem;font-size: 1rem;color: #333333;"
          />
        </div>
        <div
          style="width: 68.75rem;height: 2.25rem;display: flex;margin-left: 4.19rem;margin-top: 1.63rem;"
        >
          <div
            style="width: 8.12rem;height: 2.25rem;line-height: 2.25rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            活动时间：
          </div>
          <el-date-picker
            v-model="BASic_SEtting.startDate"
            type="date"
            placeholder="选择日期"
            style="width: 26.25rem;height: 2.25rem;margin-left: 4.1rem;"
          ></el-date-picker>
          <div
            style="width: 4.08rem;height: 2.25rem;line-height: 2.25rem;font-size: 1rem;color: #333333;text-align: center;"
          >
            至
          </div>
          <el-date-picker
            v-model="BASic_SEtting.endDate"
            type="date"
            placeholder="选择日期"
            style="width: 26.25rem;height: 2.25rem;"
          >
          </el-date-picker>
        </div>
        <div
          style="width: 68.75rem;height: 2rem;display: flex;margin-left: 4.19rem;margin-top: 1.63rem;"
        >
          <div
            style="width: 8.12rem;height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            参与人数：
          </div>
          <input
            type="text"
            v-model="BASic_SEtting.maxJoinNumber"
            style="width: 3.75rem;height: 2rem;line-height: 2rem;border: 0.06rem solid #E4E1E1;margin-left: 4.38rem;padding-left: 0.81rem;font-size: 1rem;color: #333333;"
          />
          <div
            style="height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;margin-left: 1.38rem;"
          >
            人
          </div>
        </div>
        <div
          style="width: 68.75rem;height: 2rem;display: flex;margin-left: 4.19rem;margin-top: 1.63rem;"
        >
          <div
            style="width: 8.12rem;height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            可参与次数：
          </div>
          <input
            type="text"
            v-model="BASic_SEtting.canJoinTime"
            style="width: 3.75rem;height: 2rem;line-height: 2rem;border: 0.06rem solid #E4E1E1;margin-left: 4.38rem;padding-left: 0.81rem;font-size: 1rem;color: #333333;"
          />
          <div
            style="height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;margin-left: 1.38rem;"
          >
            次
          </div>
        </div>
        <div
          style="width: 68.75rem;height: 2rem;display: flex;margin-left: 4.19rem;margin-top: 1.33rem;"
        >
          <div
            style="width: 8.12rem;height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            设置背景音乐：
          </div>
          <el-upload
            class="upload-demo"
            action="http://118.190.106.118:8021/uploadMusic"
            :on-success="handleChange"
            :file-list="fileList"
          >
            <el-button style="margin-left: 4.38rem;" size="small" type="primary"
              >点击上传</el-button
            >
          </el-upload>
        </div>
        <span
          style="margin-left: 17rem;color:#ff1b1b;font-size: 0.5rem;line-height:30px"
          >!!!! 注意点击歌曲名字或者整个行即可,不要点选择框无效</span
        >
        <div
          style="width: 56.19rem;border: 0.1rem solid rgb(245, 240, 240);margin-left: 16.75rem;border-radius: 0.2rem;"
        >
          <el-table
            ref="multipleTable"
            :data="BAckground_MUsic"
            tooltip-effect="dark"
            style="width: 100%"
            stripe
            @row-click="handleRowClick"
            @selection-change="handleSelecttonChange"
            height="320"
          >
            <el-table-column type="selection" width="50"> </el-table-column>

            <el-table-column prop="musicName" label="歌曲名字" align="left">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="
                    deleteRow(scope.$index, BAckground_MUsic)
                  "
                  type="text"
                  size="small"
                >
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="fenye">
            <el-pagination
              background
              @current-change="onPageMUsic_Change"
              :current-page.sync="pagemusic.page"
              :page-size="pagemusic.size"
              layout="prev, pager, next, jumper"
              :total="TOtal"
            >
            </el-pagination>
            <!-- <div class="Number_pages">
              共{{ Math.ceil(TOtal / pagemusic.size) }}页
            </div> -->
          </div>
        </div>
      </div>
      <!-- 奖金设置 -->
      <div v-show="od == 2">
        <div
          style="font-size: 1rem;color: #333333;font-weight: bold;margin-left: 4.19rem;margin-top: 1.38rem;display: flex; justify-content: space-between; width: 89%;"
        >
          奖金设置
          <el-button type="primary" @click="Bonus_to_submit()">提交</el-button>
        </div>
        <div
          style="width: 68.75rem;height: 0.06rem;background: #EEEEEE;margin-left: 4.19rem;margin-top: 0.35rem;"
        ></div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 0.9rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            奖金提现：
          </div>
          <input
            type="radio"
            id="ljtx"
            name="radios"
            value="0"
            v-model="radio"
          />
          <label
            for="ljtx"
            style="width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 3.88rem;"
            >立即提现</label
          >
          <input
            type="radio"
            id="ystx"
            name="radios"
            value="1"
            v-model="radio"
          />
          <label
            for="ystx"
            style="width: 20rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;"
            >延时提现
            <input
              type="text"
              v-model="delay_time"
              style="width: 1.5rem;height: 2rem;line-height: 2rem;padding: 0 1.63rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />时</label
          >
        </div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 1.2rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            提现路径：
          </div>
          <input
            type="radio"
            id="zfb"
            name="radios2"
            value="支付宝"
            v-model="radio2"
          />
          <label
            for="zfb"
            style="width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 3.88rem;"
            >支付宝</label
          >
          <input
            type="radio"
            id="wx"
            name="radios2"
            value="微信"
            v-model="radio2"
          />
          <label
            for="wx"
            style="width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;"
            >微信</label
          >
        </div>
        <div
          style="font-size: 1rem;color: #333333;font-weight: bold;margin-left: 4.19rem;margin-top: 2.01rem;"
        >
          提现账号统计
        </div>
        <div
          style="width: 68.75rem;height: 0.06rem;background: #EEEEEE;margin-left: 4.19rem;margin-top: 0.35rem;"
        ></div>
        <div class="statistics">
          <el-table
            :data="statistics_data"
            height="440"
            style="width: 99.99%"
            stripe
            :row-class-name="tableRowClassName"
            :header-cell-style="{ background: '#eeeeee', color: '#606266' }"
          >
            <el-table-column
              prop="nickName"
              label="用户账号"
              align="center"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="withdrawAmount"
              label="提现金额(元)"
              align="center"
              width="180"
            >
            </el-table-column>
            <el-table-column
              prop="applyWithdrawTime"
              align="center"
              label="申请提现时间"
            >
            </el-table-column>
            <el-table-column
              prop="arrivalAccountTime"
              align="center"
              label="到账时间"
            >
            </el-table-column>
          </el-table>

          <div class="fenye">
            <el-pagination
              background
              @current-change="onPageChange"
              :current-page.sync="pageInfo.page"
              :page-size="pageInfo.size"
              layout="prev, pager, next, jumper"
              :total="TO_TAl"
            >
            </el-pagination>

            <!-- <div class="Number_pages">
              共{{ Math.ceil(TO_TAl / pageInfo.size) }}页
            </div> -->
          </div>
        </div>
      </div>
      <!-- 答题设置 -->
      <div v-show="od == 3">
        <div
          style="font-size: 1rem;color: #333333;font-weight: bold;margin-left: 4.19rem;margin-top: 1.38rem;display: flex; justify-content: space-between; width: 89%;"
        >
          答题设置
          <el-button type="primary" @click="question_bank()">提交</el-button>
        </div>
        <div
          style="width: 68.75rem;height: 0.06rem;background: #EEEEEE;margin-left: 4.19rem;margin-top: 0.35rem;"
        ></div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 0.9rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            答题数量：
          </div>
          <div
            style="width: 20rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 4.5rem;"
          >
            <input
              v-model="QUestion_Bank.itemNumber"
              type="text"
              style="width: 3rem;height: 2rem;line-height: 2rem;padding: 0 0.63rem;font-size: 1rem;color: #333333;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />道
          </div>
        </div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 2.94rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            难易度：
          </div>
          <div
            style="width: 15rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 4.5rem;"
          >
            简单<input
              v-model="QUestion_Bank.simpleNumber"
              type="text"
              style="width: 3rem;height: 2rem;line-height: 2rem;padding: 0 0.63rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />道
          </div>
          <div
            style="width: 15rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;"
          >
            一般
            <input
              v-model="QUestion_Bank.generalNumber"
              type="text"
              style="width: 3rem;height: 2rem;line-height: 2rem;padding: 0 0.63rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />道
          </div>
          <div
            style="width: 15rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;"
          >
            困难
            <input
              v-model="QUestion_Bank.difficultNumber"
              @blur="mathematics()"
              type="text"
              style="width: 3rem;height: 2rem;line-height: 2rem;padding: 0 0.63rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />道
          </div>
          <span
            v-if="ghjk"
            style="color: red;font-size: 0.8rem; margin-left: 0.5rem;"
            >从左往右相加，你的难易度题目数量跟答题总数不符合</span
          >
        </div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 3rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            答题时间：
          </div>
          <input
            type="radio"
            id="mtxz"
            name="radios3"
            value="0"
            v-model="radio3"
          />
          <label
            for="mtxz"
            style="min-width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 4.5rem;"
            >每题限制<input
              v-show="radio3 == 0"
              type="text"
              v-model="QUestion_Bank.answerLimitTime"
              style="width: 1rem;height: 2rem;line-height: 2rem;padding: 0 1.63rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />
            <span v-show="radio3 == 0">秒</span></label
          >
          <input
            type="radio"
            id="zsjxz"
            name="radios3"
            value="1"
            v-model="radio3"
          />
          <label
            for="zsjxz"
            style="min-width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 5rem;"
            >总时间限制<input
              v-show="radio3 == 1"
              type="text"
              v-model="QUestion_Bank.answerLimitTime"
              style="width: 1rem;height: 2rem;line-height: 2rem;padding: 0 1.63rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
            />
            <span v-show="radio3 == 1">秒</span></label
          >
          <input
            type="radio"
            id="bx"
            name="radios3"
            value="2"
            v-model="radio3"
          />
          <label
            for="bx"
            style="width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 5rem;"
            >不限</label
          >
        </div>
        <div
          style="width: 68.75rem;height: 2.63rem;display: flex;margin-left: 4.19rem;margin-top: 3rem;"
        >
          <div
            style="width: 8.12rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
          >
            判断对错时机：
          </div>
          <input
            type="radio"
            id="xzspd"
            name="radios4"
            value="0"
            v-model="QUestion_Bank.judgeOpportunity"
          />
          <label
            for="xzspd"
            style="width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 4.5rem;"
            >选择时判断</label
          >
          <input
            type="radio"
            id="tjspd"
            name="radios4"
            value="1"
            v-model="QUestion_Bank.judgeOpportunity"
          />
          <label
            for="tjspd"
            style="width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 5rem;"
            >提交时判断</label
          >
        </div>
        <div
          style="font-size: 1rem;color: #333333;font-weight: bold;margin-left: 4.19rem;margin-top: 3.81rem;"
        >
          答题设置
        </div>
        <div
          style="width: 68.75rem;height: 0.06rem;background: #EEEEEE;margin-left: 4.19rem;margin-top: 0.35rem;"
        ></div>
        <div class="left-menu-view4" scroll-y="true" :scroll-left="scrollLeft5">
          <div v-for="(menu5Tab, menu5index) in menuTabs5" :key="menu5index">
            <div
              :class="[
                currentTab5 == menu5index
                  ? 'menu-one-view-act4'
                  : 'menu-one-view4'
              ]"
              class="menu-one-view4"
              @tap="getRightList(menu5index, menu5Tab)"
              v-bind:id="'tabNum5' + menu5index"
              @click="swichMenu5(menu5index)"
            >
              <div
                :class="[
                  currentTab5 == menu5index ? 'menu-one-act4' : 'menu-one4'
                ]"
              >
                <div class="menu-one-txt4">{{ menu5Tab.name }}</div>
                <div class="menu-one-bottom4">
                  <div class="menu-one-bottom-color4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--答题渲染-->
        <div
          v-for="(q, qidx) in question"
          :key="qidx"
          style="width: 68.13rem;min-height: 29.19rem;background:#EEEEEE;border: 0.06rem solid #EEEEEE;margin-left: 4.94rem;margin-top: 1.25rem; position: relative;"
        >
          <div style="display: flex;margin-top: 1.69rem;">
            <input
              type="radio"
              :id="question + qidx"
              style="margin-left: 1rem;"
              :name="question + qidx"
              value="0"
              :checked="q.isSelect"
              @click="selectBox(qidx, q)"
            />

            <label
              :for="question + qidx"
              style="width: 6rem;height: 2.25rem;line-height: 2.25rem;font-size: 1rem;color: #333333;margin-left: 1.63rem;"
              >题目{{ qidx + 1 }}：</label
            >
            <input
              type="text"
              :disabled="q.green"
              v-model="q.question"
              style="width: 48rem;height: 2.25rem;background: #FFFFFF;margin-left: 1.56rem;border-radius: 0.2rem;line-height: 2.25rem;padding-left: 1rem;border: none;font-size: 0.88rem;color: #333333;"
            />

            <div
              style="margin-left: 1rem; height: 2.25rem;line-height: 2.25rem;cursor:pointer;"
              v-show="!!q.uuId"
              v-if="q.green"
            >
              <span style="color: #67c23a;" @click="fixQuestion(qidx)">
                修改
              </span>
              |
              <span style="color:#ea7777;" @click="Delete_the_title(qidx)"
                >删除</span
              >
            </div>
            <el-button
              type="success"
              size="mini"
              style="margin-left: 1rem;"
              v-if="!q.green"
              @click="ANswer_To_Save(q, qidx, 'fix')"
              >修改提交</el-button
            >
          </div>
          <div
            style="width: 68.13rem;height: 2.63rem;display: flex;margin-top: 3rem;"
          >
            <div
              style="width: 7.26rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;text-align: right;"
            >
              奖励金额：
            </div>

            <!-- 自定义金额 -->
            <input
              type="radio"
              :disabled="q.green"
              :id="'radioId' + 1 + qidx"
              :name="'radio' + qidx"
              value="0"
              v-model="q.bonusWay"
            />
            <label
              :for="'radioId' + 1 + qidx"
              style="min-width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 1.8rem;"
              >自定义金额

              <input
                v-show="q.bonusWay == 0"
                type="text"
                :disabled="q.green"
                v-model="q.bonusMoney"
                style="width: 3rem;height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;"
              />
              <span v-show="q.bonusWay == 0">元</span>
            </label>

            <!-- 随机金额 -->
            <input
              type="radio"
              :disabled="q.green"
              :id="'radioId' + 2 + qidx"
              :name="'radio' + qidx"
              value="1"
              v-model="q.bonusWay"
            />
            <label
              :for="'radioId' + 2 + qidx"
              style="min-width: 10rem;height: 2.63rem;line-height: 2.63rem;font-size: 1rem;color: #333333;margin-left: 5rem;"
              >随机金额

              <input
                v-show="q.bonusWay == 1"
                :disabled="q.green"
                type="text"
                v-model="q.bonusMin"
                style="width: 3rem;height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;font-size: 0.88rem;color: #333333;"
              />
              <span v-show="q.bonusWay == 1">至</span>

              <input
                v-show="q.bonusWay == 1"
                :disabled="q.green"
                type="text"
                v-model="q.bonusMax"
                style="width: 3rem;height: 2rem;line-height: 2rem;font-size: 1rem;color: #333333;margin-left: 0.94rem;margin-right: 0.94rem;border: 0.06rem solid #AEAEAE;border-radius: 0.2rem;text-align: center;font-size: 0.88rem;color: #333333;"
                @blur="Check_the_size(qidx)"
              />
              <span v-show="q.bonusWay == 1">元</span>
              <span
                v-if="payze"
                v-show="q.bonusWay == 1"
                style="color: red;font-size: 0.8rem; margin-left: 0.5rem;"
                >结束比开始还小？？请修改金额</span
              >
            </label>
          </div>
          <div style="display: flex;">
            <div
              style="width: 7.26rem;height: 2.25rem;line-height: 2.25rem;font-size: 0.88rem;color: #333333;text-align: right;margin-top: 0.94rem;"
            >
              答案：
            </div>
            <div>
              <div
                v-for="(adata, aidx) in q.options"
                :key="aidx"
                style="display: flex;margin-top: 0.94rem;"
              >
                <input
                  :disabled="q.green"
                  type="text"
                  v-model="adata.answerOption"
                  style="width: 36rem;height: 2.25rem;background: #FFFFFF;margin-left: 1.9rem;border-radius: 0.2rem;line-height: 2.25rem;padding-left: 1rem;border: none;font-size: 0.88rem;color: #333333;"
                />
                <!--图片上传功能-->
                <div
                  style="width: 15rem;height: 2rem;margin-left: 0.2rem; display: flex;"
                >
                  <div
                    style="width: 3rem;height:2rem;position:relative"
                    @mouseenter="enter(qidx, aidx)"
                    @mouseleave="leave(qidx, aidx)"
                  >
                    <img
                      :src="adata.picture"
                      v-image-preview
                      style="width: 100%;height: 100%;"
                    />
                    <!--图片-->
                    <div
                      v-if="adata.picture != ''"
                      style="width:1.1rem;height:1.1rem;border-radius:50%;position:absolute;top:-0.7rem;right:-0.7rem;"
                      @click="remove_omit(qidx, aidx)"
                    >
                      <i
                        title="点击按钮删除图片"
                        v-show="adata.seen"
                        class="el-icon-error"
                        style="width:1rem;height:1rem;border-radius:50%;color:rgb(255,86,86);background-color:#ffffff"
                      ></i>
                    </div>
                  </div>

                  <el-button
                    type="primary"
                    @click="on_pickFile(qidx, aidx)"
                    size="mini"
                    style="margin-left: 1rem;"
                    >选择图片</el-button
                  >
                  <el-button
                    size="mini"
                    type="success"
                    @click="onUpload($event, qidx, aidx)"
                    >开始上传</el-button
                  >
                  <input
                    type="file"
                    :id="'fileInput-' + qidx + '-' + aidx"
                    ref="fileInput"
                    accept="image/*"
                    @change="getFile($event, qidx, aidx)"
                    style="display: none"
                  />
                </div>

                <img
                  @click="pitch(qidx, aidx)"
                  v-if="adata.isAnswer == 0"
                  src="../../static/img/pitch.png"
                  style="width: 1.19rem;height: 1.19rem;margin-top: 0.62rem;margin-left: 0.5rem;"
                />
                <img
                  @click="pitch(qidx, aidx)"
                  v-if="adata.isAnswer == 1"
                  src="../../static/img/pitch_active.png"
                  style="width: 1.19rem;height: 1.19rem;margin-top: 0.62rem;margin-left: 0.5rem;"
                />
                <img
                  @click="deleteAnswer(qidx, aidx)"
                  v-if="aidx > 1"
                  src="../../static/img/delete.png"
                  style="width: 1.19rem;height: 1.19rem;margin-top: 0.62rem;margin-left: 0.5rem;"
                />
              </div>
            </div>
          </div>
          <div
            @click="addAnswer(qidx)"
            style="width: 100%;height: 2.25rem;line-height: 2.25rem;text-align: center;font-size: 0.88rem;color: #333333;margin-top: 1.06rem;"
          >
            +添加答案
          </div>
          <div style="display: flex;margin-top: 1.69rem;">
            <div
              style="width: 7.26rem;height: 2.25rem;line-height: 2.25rem;font-size: 0.88rem;color: #333333;text-align: right;"
            >
              答案解析：
            </div>
            <textarea
              :disabled="q.green"
              v-model="q.answerRemark"
              type="text"
              style="width: 50rem;height: 7.5rem;background: #FFFFFF;margin-left: 1.9rem;border-radius: 0.2rem;line-height: 2rem;padding: 0 1rem;border: none;margin-bottom: 1.94rem;resize: none;font-size: 0.88rem;color: #333333;"
            ></textarea>
          </div>

          <div v-if="q.prohibition">
            <el-button
              type="primary"
              style="position: absolute; right: 0.8rem; bottom: 0.8rem;"
              size="small"
              @click="ANswer_To_Save(q, qidx, 'add')"
              >添加保存
            </el-button>
          </div>
        </div>
        <button
          @click="addQuestion()"
          style="width: 8.75rem;height: 2.25rem;background: #3E99FF;border-radius: 1rem;font-size: 1rem;color: #FFFFFF;text-align: center;margin-top: 0.88rem;margin-bottom: 1.44rem;margin-left: 35.38rem;border: none;"
        >
          +添加题目
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import preview from "./preview";
import axios from "axios";

import { OVW_information } from "@/http/api"; //答题信息总览
import { Bonus_set } from "@/http/api.js"; //奖金设置
import { Base_Installation } from "@/http/api.js"; //基础设置
import { The_answer_set } from "@/http/api.js"; //基础设置

export default {
  name: "Answer",
  components: {
    preview
  },
  data() {
    return {
      multipleSelection: [],
      fileList: [],
      dialogVisible: false,
      BAckground_MUsic: [],
      statistics_data: [],
      scrollLeft2: 0,
      currentTab2: 0,
      menuTabs2: [
        {
          name: "信息总览",
          newstype_id: 0
        },
        {
          name: "基础设置",
          newstype_id: 1
        },
        {
          name: "奖金设置",
          newstype_id: 2
        },
        {
          name: "题库",
          newstype_id: 3
        }
      ],
      scrollLeft3: 0,
      currentTab3: 0,
      menuTabs3: [
        {
          name: "参与人数",
          newstype_id: 0
        },
        {
          name: "答题次数",
          newstype_id: 1
        },
        {
          name: "奖励提现",
          newstype_id: 2
        }
      ],
      scrollLeft4: 0,
      currentTab4: 0,
      menuTabs4: [
        {
          name: "今日状况",
          newstype_id: 0
        },
        {
          name: "最近七天",
          newstype_id: 1
        },
        {
          name: "最近30天",
          newstype_id: 2
        }
      ],
      scrollLeft5: 0,
      currentTab5: 0,
      menuTabs5: [
        {
          name: "简单",
          newstype_id: 0
        },
        {
          name: "一般",
          newstype_id: 1
        },
        {
          name: "困难",
          newstype_id: 2
        }
      ],
      od: 3,
      value1: "",
      value2: "",
      fileName: "选择歌曲",
      radio: "",
      radio2: "",
      radio3: null,
      question: [],
      amount_to: {}, //总计
      significance: {
        //定义空数组 用来折线图传值
        dateType: 1, //今日状况 最近七天 最近三十天
        type: 1 //参与人数 答题次数 奖励体现
      },
      ggggggggg: [],
      delay_time: 50,
      TOtal: 0, //音乐总条数
      TO_TAl: 0, //提现账号总条数
      pageInfo: {
        page: 1, //当前页数
        size: 3 //每页显示的个数
      },
      pagemusic: {
        // 音乐分页
        page: 1,
        size: 3
      },

      BASic_SEtting: {
        defaultMusicId: ""
      },
      QUestion_Bank: {},
      payze: false,
      ghjk: false,
      seen: true
    };
  },

  methods: {
    enter(aindex, index) {
      this.question[aindex].options[index].seen = true;
      this.$forceUpdate();
    },
    leave(aindex, index) {
      this.question[aindex].options[index].seen = false;
      this.$forceUpdate();
    },

    async remove_omit(a, b) {
      let uId = this.question[a].options[b].id;
      try {
        let res = await The_answer_set.strikethrough({
          data: JSON.stringify(uId)
        });
        if (res.status == "SUCCESS") {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success"
          });
          this.title_number(this.currentTab5);
          this.$forceUpdate();
        }
        console.log(res);
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试！！");
      }
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },

    //第二步:再来写个方法, button代替input选择图片
    on_pickFile(qidx, aidx) {
      document.getElementById("fileInput-" + qidx + "-" + aidx).click();
      console.log("dddddd");
    },
    // //第三步: 文件选择后, 后在页面上显示出来    转base64位的操作
    getFile(event, qidx, aidx) {
      const files = event.target.files;
      let filename = files[0].name; //只有一个文件
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid image!"); //判断图片是否有效
      }
      const fileReader = new FileReader(); //内置方法new FileReader()   读取文件
      fileReader.addEventListener("load", () => {
        this.question[qidx].options[aidx].picture = fileReader.result;
        this.$forceUpdate();
      });
      fileReader.readAsDataURL(files[0]);
      this.question[qidx].options[aidx].file = files[0];
      //到这里后, 选择图片就可以显示出来了
    },
    //第四步: 上传文件了
    onUpload(event, qidx, aidx) {
      event.preventDefault();
      let fd = new FormData(); //内置方法new FormData()  新建一个表格
      fd.append("file", this.question[qidx].options[aidx].file); //把image添加进去
      console.log("000000000000", this.question[qidx].options[aidx].file); //(       第二次有效打印           )
      axios
        .post("http://118.190.106.118:8021/fileUpload", fd)
        .then(res => {
          //第一个参:this.postUrl就是上面保存好的要上传的地址
          console.log(res); //(      第三次有效打印    )
          if (res.data.status == "SUCCESS") {
            let rest = res.data;
            if (rest.status == "SUCCESS") {
              console.log(rest.data.path);
              this.$message({
                type: "success",
                message: "上传成功！！!"
              });
              this.question[qidx].options[aidx].picture = rest.data.path;
              this.$forceUpdate();
            }
          }
        })
        .catch(error => {
          this.$message.error("服务器异常，请稍后再试！！");
        });
    },

    handleSelecttonChange(val) {
      if (val.length > 1) {
        this.$refs.multipleTable.clearSelection();
        this.$refs.multipleTable.toggleRowSelection(val.pop());
      } else {
        this.multipleSelection = val.pop();
      }
    },

    handleRowClick(row, event, column) {
      this.$refs.multipleTable.toggleRowSelection(row);
      this.BASic_SEtting.defaultMusicId = row.uuId;
    },

    //折线图接口
    async broken_line_graph(kjg) {
      try {
        const res = await OVW_information.statistical({
          type: kjg == undefined ? 1 : kjg.type,
          dateType: kjg == undefined ? 1 : kjg.dateType
        });
        if (res.status == "SUCCESS") {
          let kas = res.data;
          this.ggggggggg = kas;
          this.drawLine();
        }
      } catch (e) {
        this.$message.error("服务器报错,请查看");
      }
    },

    //信息总览接口
    async ifn_statistics() {
      try {
        const res = await OVW_information.ong();
        if (res.status == "SUCCESS") {
          const aggregate = res.data;
          this.amount_to = aggregate;
        }
      } catch (e) {
        this.$message.error("服务器报错,请查看服务器");
      }
    },

    //添加项目
    addQuestion() {
      var obj = {
        uuid: "",
        bonusWay: 1,
        green: false,
        options: [
          {
            isAnswer: 1
          },
          {
            isAnswer: 0
          }
        ],
        prohibition: true
      };
      this.question.push(obj);
      this.$forceUpdate();
    },

    pitch(a, d) {
      console.log("895623", a);
      console.log("74185296333", d);
      if (this.question[a].options[d].isAnswer == 0) {
        this.question[a].options[d].isAnswer = 1;
      } else if (this.question[a].options[d].isAnswer == 1) {
        this.question[a].options[d].isAnswer = 0;
      }
    },
    deleteAnswer(a, aidx) {
      this.question[a].options.splice(aidx, 1);
    },
    //添加答案
    addAnswer(a) {
      var obj = {
        isAnswer: 0
      };
      if (this.question[a].options.length < 4) {
        this.question[a].options.push(obj);
      } else {
        alert("最多只能4个答案哦");
      }
    },
    // 点击修改的时候设置输入框变为可输入
    fixQuestion(index) {
      this.question[index].green = false;
      this.$forceUpdate(); //强制刷新
    },
    //点击删除操作
    Delete_the_title(index) {
      let uuId = this.question[index].uuId;
      this.$confirm("此操作将永久删除该题, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          try {
            let res = await The_answer_set.Delete_the_topic({
              itemId: uuId
            });

            if (res.status == "SUCCESS") {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$forceUpdate();
            } else {
              this.$message.error("删除失败");
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    choiceImg() {
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
    },

    //折线图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      let Array = []; //声明一个空数组 用来放时间段的
      let arraye = []; //声明一个空数组 用来放数量的
      this.ggggggggg.forEach((key, index) => {
        Array.push(key.date);
        arraye.push(key.value);
      });
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: Array
        },
        yAxis: {
          type: "value"
        },

        series: [
          {
            // data: [82, 93, 90, 93, 129, 133, 132],
            data: arraye,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#8cd5c2", //改变折线点的颜色

                lineStyle: {
                  color: "#0BD88D", //改变折线颜色
                  width: 4
                }
              }
            }
          }
        ]
      });
    },
    //展示日历组件
    showCalendar() {
      this.showCalendarTF = !this.showCalendarTF;
    },
    swichMenu2: function(current) {
      if (this.currentTab2 == current) {
        return false;
      } else {
        this.od = current;
        this.currentTab2 = current;
        this.setScrollLeft2(current);
      }
    },
    setScrollLeft2: async function(tabIndex) {
      let leftWidthSum = 0;
      for (var i = 0; i <= tabIndex; i++) {
        let nowElement = await this.getWidth2("tabNum2" + i);
        leftWidthSum = leftWidthSum + nowElement.width;
      }
      let winWidth = uni.getSystemInfoSync().windowWidth;
      this.scrollLeft2 = leftWidthSum > winWidth ? leftWidthSum - winWidth : 0;
    },
    getWidth2: function(id) {
      //得到元素的宽高
      return new Promise((res, rej) => {
        uni
          .createSelectorQuery()
          .select("#" + id)
          .fields(
            {
              size: true,
              scrollOffset: true
            },
            data => {
              res(data);
            }
          )
          .exec();
      });
    },
    //统计图   (参与人数，答题次数，奖励提现)点击事件
    swichMenu3(current) {
      //点击其中一个 menu
      let can = current + 1;
      this.significance.type = can;
      this.broken_line_graph(this.significance);
      if (this.currentTab3 == current) {
        return false;
      } else {
        this.currentTab3 = current;
        this.setScrollLeft3(current);
      }
    },

    //奖金设置预览
    async Bonus_to_preview() {
      try {
        let res = await Bonus_set.Query_the_bonus({});
        if (res.status == "SUCCESS") {
          let fgh = res.data;
          this.radio2 = fgh.bonusWithdrawPath;
          if (fgh.bonusWithdrawWay == 0) {
            this.radio = fgh.bonusWithdrawWay;
            this.delay_time = "";
          } else {
            this.radio = 1;
            this.delay_time = fgh.bonusWithdrawWay;
          }
        }
      } catch (e) {
        this.$message.error("网络异常，请查看服务器，或稍后再试");
      }
    },

    setScrollLeft3: async function(tabIndex) {
      let leftWidthSum = 0;
      for (var i = 0; i <= tabIndex; i++) {
        let nowElement = await this.getWidth3("tabNum3" + i);
        leftWidthSum = leftWidthSum + nowElement.width;
      }
      let winWidth = uni.getSystemInfoSync().windowWidth;
      this.scrollLeft3 = leftWidthSum > winWidth ? leftWidthSum - winWidth : 0;
    },
    getWidth3: function(id) {
      //得到元素的宽高
      return new Promise((res, rej) => {
        uni
          .createSelectorQuery()
          .select("#" + id)
          .fields(
            {
              size: true,
              scrollOffset: true
            },
            data => {
              res(data);
            }
          )
          .exec();
      });
    },
    //统计图 （今日状况，最近七天，最近30天）点击事件
    swichMenu4(current) {
      //点击其中一个 menu

      let can = current + 1;
      this.significance.dateType = can;
      this.broken_line_graph(this.significance);

      if (this.currentTab4 == current) {
        return false;
      } else {
        this.currentTab4 = current;
        this.setScrollLeft4(current);
      }
    },
    setScrollLeft4: async function(tabIndex) {
      let leftWidthSum = 0;
      for (var i = 0; i <= tabIndex; i++) {
        let nowElement = await this.getWidth4("tabNum4" + i);
        leftWidthSum = leftWidthSum + nowElement.width;
      }
      let winWidth = uni.getSystemInfoSync().windowWidth;
      this.scrollLeft4 = leftWidthSum > winWidth ? leftWidthSum - winWidth : 0;
    },
    getWidth4: function(id) {
      //得到元素的宽高
      return new Promise((res, rej) => {
        uni
          .createSelectorQuery()
          .select("#" + id)
          .fields(
            {
              size: true,
              scrollOffset: true
            },
            data => {
              res(data);
            }
          )
          .exec();
      });
    },
    swichMenu5(current) {
      //点击其中一个 menu

      this.currentTab5 = current;
      this.title_number(current);
      if (this.currentTab5 == current) {
        return false;
      } else {
        this.currentTab5 = current;
        this.setScrollLeft5(current);
      }
    },
    setScrollLeft5: async function(tabIndex) {
      let leftWidthSum = 0;
      for (var i = 0; i <= tabIndex; i++) {
        let nowElement = await this.getWidth5("tabNum5" + i);
        leftWidthSum = leftWidthSum + nowElement.width;
      }
      let winWidth = uni.getSystemInfoSync().windowWidth;
      this.scrollLeft5 = leftWidthSum > winWidth ? leftWidthSum - winWidth : 0;
    },
    getWidth5: function(id) {
      //得到元素的宽高
      return new Promise((res, rej) => {
        uni
          .createSelectorQuery()
          .select("#" + id)
          .fields(
            {
              size: true,
              scrollOffset: true
            },
            data => {
              res(data);
            }
          )
          .exec();
      });
    },
    //奖金提现账号统计
    async st_analysis(pagePAGE, size) {
      try {
        let res = await Bonus_set.Account_statistics({
          page: pagePAGE,
          size: size
        });
        if (res.status == "SUCCESS") {
          this.statistics_data = res.data;
          this.TO_TAl = res.resMetaData.total;
        }
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },
    //设置奖金提现方式
    async Bonus_to_submit() {
      let yuio = null;
      if (this.radio == "0") {
        yuio = 0;
        this.delay_time = "";
      } else {
        yuio = Number(this.delay_time);
      }

      try {
        let res = await Bonus_set.bonus_payment({
          data: {
            bonusWithdrawPath: this.radio2,
            bonusWithdrawWay: yuio
          }
        });
        if (res.status == "SUCCESS") {
          this.Bonus_to_preview();
          this.$message({
            message: "提交成功！！！",
            type: "success"
          });
        }
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },
    onPageChange(page) {
      this.pageInfo.page = page;
      this.st_analysis(page, this.pageInfo.size);
    },

    onPageMUsic_Change(page) {
      this.pagemusic.page = page;
      this.BGM_BackgrOund_music(page, this.pagemusic.size);
    },

    deleteRow(index, rows) {
      this.$confirm("此操作将永久删除该歌曲, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          try {
            let res = await Base_Installation.Delete_the_music({
              uuId: rows[index].uuId
            });
            if (res.status == "SUCCESS") {
              this.$message({
                type: "success",
                message: "ok！！删除成功!"
              });
              this.BGM_BackgrOund_music();
            } else {
              this.$message.error("移除成功失败！！！");
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //基础预览
    async basic_knowledge() {
      try {
        let res = await Base_Installation.Based_on_the_preview({});
        if (res.status == "SUCCESS") {
          this.BASic_SEtting = res.data;
        }
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },
    //基础设置
    async Basis_to_submit() {
      let data = this.BASic_SEtting;
      try {
        let res = await Base_Installation.Set_the_BAse({
          data,
          metaData: {
            page: 0,
            size: 0
          }
        });
        if (res.status == "SUCCESS") {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success"
          });
          this.basic_knowledge();
        }
      } catch (e) {
        this.$message.error("服务器异常,请稍后重试");
      }
    },
    //答题预览
    async testing_system() {
      try {
        let res = await The_answer_set.ANswer_to_preview({});
        if (res.status == "SUCCESS") {
          this.QUestion_Bank = res.data;
          this.radio3 = res.data.answerLimitWay;
          this.ghjk = false;
        }
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },

    //答题预览设置提交
    async question_bank() {
      let zong = Number(this.QUestion_Bank.itemNumber);
      let jian = Number(this.QUestion_Bank.simpleNumber);
      let yban = Number(this.QUestion_Bank.generalNumber);
      let nan = Number(this.QUestion_Bank.difficultNumber);
      let ss = Number(jian + yban + nan);

      if (ss == zong) {
        if (this.radio3 == 2) {
          this.QUestion_Bank.answerLimitTime = "";
        }
        try {
          let res = await The_answer_set.ANswer_sheet({
            answerLimitTime: Number(this.QUestion_Bank.answerLimitTime),
            answerLimitWay: this.radio3,
            difficultNumber: Number(this.QUestion_Bank.difficultNumber),
            generalNumber: Number(this.QUestion_Bank.generalNumber),
            itemNumber: Number(this.QUestion_Bank.itemNumber),
            judgeOpportunity: Number(this.QUestion_Bank.judgeOpportunity),
            simpleNumber: Number(this.QUestion_Bank.simpleNumber)
          });

          if (res.status == "SUCCESS") {
            this.$message({
              message: "更新成功！！！！！",
              type: "success"
            });
            this.testing_system();
          }
        } catch (e) {
          this.$message.error("服务器异常，请稍后再试！！！");
        }
      } else {
        this.$confirm("从左往右相加，你的难易度题目数量跟答题总数不符合")
          .then(_ => {
            done();
            this.testing_system();
          })
          .catch(_ => {
            this.testing_system();
          });
        this.ghjk = true;
      }
    },

    //添加题目和修改题目
    async ANswer_To_Save(item, index, type) {
      // console.log('固定奖励',this.question[index].bonusMoney)
      // console.log('随机1,自定义0',this.question[index].bonusWay)
      // console.log('随机小',this.question[index].bonusMin);
      // console.log('随机大',this.question[index].bonusMax)
      if (this.question[index].bonusWay == 0) {
        this.question[index].bonusMin = null;
        this.question[index].bonusMax = null;
      } else if (this.question[index].bonusWay == 1) {
        this.question[index].bonusMoney = null;
      }

      // console.log('固定奖励==',this.question[index].bonusMoney)
      // console.log('随机1,自定义0===',this.question[index].bonusWay)
      // console.log('随机小==',this.question[index].bonusMin);
      // console.log('随机大==',this.question[index].bonusMax)

      let datas = this.question[index].options;
      let options = {};
      options = datas.map(x => {
        return {
          answerOption: x.answerOption,
          id: x.id,
          isAnswer: x.isAnswer,
          picture: x.picture
        };
      });

      // console.log(options)
      let param = {
        question: this.question[index].question,
        answerRemark: this.question[index].answerRemark,
        bonusMax: this.question[index].bonusMax,
        bonusMin: this.question[index].bonusMin,
        bonusMoney: this.question[index].bonusMoney,
        bonusWay: this.question[index].bonusWay,
        difficultyDegree: this.currentTab5,
        isSelect: 0,
        options
      };
      type === "fix" ? (param.uuId = this.question[index].uuId) : "";

      try {
        let res =
          type === "add"
            ? await The_answer_set.ADD_the_Title(param) //这是添加接口
            : await The_answer_set.the_title_fix(param); //这是修改接口
        if (res.status == "SUCCESS") {
          this.$message({
            message: "更新成功！！！！1",
            type: "success"
          });
          this.$refs.pre.examination(); //调用子组件的更新数据的方法
          this.question[index].green = true; //设置输入框禁用
          this.$forceUpdate(); //强制刷新
        }
        this.title_number(this.currentTab5);
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },

    //题目数量渲染
    async title_number(asdg) {
      try {
        let res = await The_answer_set.the_title_number({
          difficultyDegree: asdg
        });
        if (res.status == "SUCCESS") {
          this.question = res.data;
          this.question.forEach(v => {
            v.prohibition = v.uuId ? false : true; //是否显示添加保存按钮
            v.green = v.uuId ? true : false; //input是否可输入
          });
        }
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },

    // 选中或未选中题目
    async selectBox(index, item) {
      console.log("852963", index);
      console.log("777777777", item);

      let datalistArr = this.question;
      let total = 0;
      for (let i = 0; i < datalistArr.length; i++) {
        console.log(datalistArr[i].isSelect);
        if (datalistArr[i].isSelect == 1) {
          total++;
        }
      }

      if (this.currentTab5 == 0) {
        if (this.QUestion_Bank.simpleNumber > total) {
          try {
            let res = await The_answer_set.selecte_title({
              isSelect: item.isSelect === 0 ? 1 : 0,
              itemId: item.uuId
            });
            if (res.status == "SUCCESS") {
              this.$message.success("操作成功");
              this.question[index].isSelect = item.isSelect === 0 ? 1 : 0;
              //请求后台成功的话
              this.$refs.pre.examination(); //调用子组件的更新数据的方法
            } else {
              this.$message.error(res.message);
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        } else if (
          this.QUestion_Bank.simpleNumber == total &&
          item.isSelect == 1
        ) {
          try {
            let res = await The_answer_set.selecte_title({
              isSelect: item.isSelect === 0 ? 1 : 0,
              itemId: item.uuId
            });
            if (res.status == "SUCCESS") {
              this.$message.success("操作成功");
              this.question[index].isSelect = item.isSelect === 0 ? 1 : 0;
              //请求后台成功的话
              this.$refs.pre.examination(); //调用子组件的更新数据的方法
            } else {
              this.$message.error(res.message);
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        } else {
          this.$message.error("简单数量已达到，或者请重新设置难易度数量");
          item.isSelect = 0;
        }
      } else if (this.currentTab5 == 1) {
        if (this.QUestion_Bank.generalNumber > total) {
          try {
            let res = await The_answer_set.selecte_title({
              isSelect: item.isSelect === 0 ? 1 : 0,
              itemId: item.uuId
            });
            if (res.status == "SUCCESS") {
              this.$message.success("操作成功");
              this.question[index].isSelect = item.isSelect === 0 ? 1 : 0;
              //请求后台成功的话
              this.$refs.pre.examination(); //调用子组件的更新数据的方法
            } else {
              this.$message.error(res.message);
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        } else if (
          this.QUestion_Bank.generalNumber == total &&
          item.isSelect == 1
        ) {
          try {
            let res = await The_answer_set.selecte_title({
              isSelect: item.isSelect === 0 ? 1 : 0,
              itemId: item.uuId
            });
            if (res.status == "SUCCESS") {
              this.$message.success("操作成功");
              this.question[index].isSelect = item.isSelect === 0 ? 1 : 0;
              //请求后台成功的话
              this.$refs.pre.examination(); //调用子组件的更新数据的方法
            } else {
              this.$message.error(res.message);
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        } else {
          this.$message.error("一般数量已达到，或者请重新设置难易度数量");
          item.isSelect = 0;
        }
      } else if (this.currentTab5 == 2) {
        if (this.QUestion_Bank.difficultNumber > total) {
          try {
            let res = await The_answer_set.selecte_title({
              isSelect: item.isSelect === 0 ? 1 : 0,
              itemId: item.uuId
            });
            if (res.status == "SUCCESS") {
              this.$message.success("操作成功");
              this.question[index].isSelect = item.isSelect === 0 ? 1 : 0;
              //请求后台成功的话
              this.$refs.pre.examination(); //调用子组件的更新数据的方法
            } else {
              this.$message.error(res.message);
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        } else if (
          this.QUestion_Bank.difficultNumber == total &&
          item.isSelect == 1
        ) {
          try {
            let res = await The_answer_set.selecte_title({
              isSelect: item.isSelect === 0 ? 1 : 0,
              itemId: item.uuId
            });
            if (res.status == "SUCCESS") {
              this.$message.success("操作成功");
              this.question[index].isSelect = item.isSelect === 0 ? 1 : 0;
              //请求后台成功的话
              this.$refs.pre.examination(); //调用子组件的更新数据的方法
            } else {
              this.$message.error(res.message);
            }
          } catch (e) {
            this.$message.error("服务器异常，请稍后再试");
          }
        } else {
          console.log("444444444");
          this.$message.error(
            "困难数量已达到无法操作，请删除其他或者请重新设置难易度数量"
          );
          this.title_number(this.currentTab5);
          this.$forceUpdate();
        }
      }
    },

    //失去焦点验证
    Check_the_size(a) {
      let ab = this.question[a].bonusMin;
      let cd = this.question[a].bonusMax;

      if (cd < ab) {
        this.$confirm("警告，你填写的金额 结束比开始还小？")
          .then(_ => {
            done();
          })
          .catch(_ => {});
        this.payze = true;
      } else {
        this.payze = false;
      }
    },

    //答题数量 矫正
    mathematics() {
      let zong = Number(this.QUestion_Bank.itemNumber);
      let jian = Number(this.QUestion_Bank.simpleNumber);
      let yban = Number(this.QUestion_Bank.generalNumber);
      let nan = Number(this.QUestion_Bank.difficultNumber);
      let ss = Number(jian + yban + nan);
      if (ss == zong) {
        this.ghjk = false;
      } else {
        this.$confirm("从左往右相加，你的难易度题目数量跟答题总数不符合")
          .then(_ => {
            done();
            this.testing_system();
          })
          .catch(_ => {
            this.testing_system();
          });
        this.ghjk = true;
      }
    },

    //背景音乐列表
    async BGM_BackgrOund_music(pagePAGE, size) {
      try {
        let res = await Base_Installation.bacKGround_music({
          page: pagePAGE,
          size: size
        });
        if (res.status == "SUCCESS") {
          this.BAckground_MUsic = res.data;
          this.TOtal = res.resMetaData.total;
        }
      } catch (e) {
        this.$message.error("服务器异常，请稍后再试");
      }
    },

    handleChange(file) {
      if (file.status == "SUCCESS") {
        this.$message({
          message: "恭喜你！！！，添加音乐成功",
          type: "success"
        });

        this.BGM_BackgrOund_music();
      }
    }
  },

  mounted() {
    this.ifn_statistics();
    this.broken_line_graph();
    this.Bonus_to_preview();
    this.st_analysis(this.pageInfo.page, this.pageInfo.size);
    this.basic_knowledge();
    this.testing_system();

    this.title_number(this.currentTab5);
    this.BGM_BackgrOund_music(this.pagemusic.page, this.pagemusic.size);
  }
};
</script>

<style scope>
.el-upload-list {
  width: 5rem;
  height: 2rem;
  display: none;
}

.object-div {
  display: flex;
  background: #eeeeee;
  margin-top: 67px;
}

.answer-div {
  width: 23.44rem;
  background: #ffffff;
  margin: 1.25rem 2.31rem;
  position: fixed;
}

.operation-div {
  width: 77.19rem;
  min-height: 55.31rem;
  background: #ffffff;
  margin-left: 30.25rem;
  margin-top: 1.25rem;
}

.top {
  display: flex;
}

.bottom {
  display: flex;
}

.cyrs {
  width: 23.75rem;
  height: 15.31rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  margin-left: 2rem;
}

.dtcs {
  width: 23.75rem;
  height: 15.31rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  margin-left: 1rem;
}

.jltx {
  width: 23.75rem;
  height: 15.31rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  margin-left: 0.81rem;
}

.left-div {
  width: 23.56rem;
  height: 30.31rem;
  background: #ffffff;
  margin-left: 2rem;
  margin-top: 2.5rem;
}

.yzz {
  width: 23.56rem;
  height: 12.75rem;
  box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem 0.5rem 0rem 0rem;
}

.jdzz {
  width: 23.56rem;
  height: 12.75rem;
  box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  margin-top: 0.81rem;
}

.charts {
  width: 48.31rem;
  height: 29.5rem;
  background: #ffffff;
  box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  margin-left: 1.38rem;
  margin-top: 2.5rem;
}
/* 选项卡样式 */

.left-menu-view {
  display: flex;
  white-space: nowrap;
  width: 50rem;
  background-color: #ffffff;
  overflow: hidden;
  height: 4.82rem;
  margin-left: 2.5rem;
  /* 在这里设置导航条高度 */
}

.left-menu-view .menu-one-view {
  display: inline-block;
  white-space: nowrap;
  width: 7.5rem;
  height: 2.44rem;
  margin-top: 1.19rem;
  margin-right: 3.75rem;
  background: #ffffff;
  border-radius: 0.3rem;
  border: 0.05rem solid #3e99ff;
}

.left-menu-view .menu-one-view-act {
  display: inline-block;
  white-space: nowrap;
  width: 7.5rem;
  height: 2.44rem;
  margin-top: 1.19rem;
  margin-right: 3.75rem;
  background: #3e99ff;
  border-radius: 0.3rem;
  cursor: pointer;
}

.left-menu-view .menu-one-view .menu-one {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 2.44rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view .menu-one-view .menu-one .menu-one-txt {
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  color: #3e99ff;
  line-height: 2.44rem;
}

.left-menu-view .menu-one-view .menu-one .menu-one-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.left-menu-view .menu-one-view .menu-one-act {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 2.44rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view .menu-one-view .menu-one-act .menu-one-txt {
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 2.44rem;
}

.left-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
/* 选项卡样式2 */

.left-menu-view2 {
  display: flex;
  white-space: nowrap;
  width: 20rem;
  background-color: #ffffff;
  overflow: hidden;
  height: 4.82rem;
  margin-left: 1.38rem;
  /* 在这里设置导航条高度 */
}

.left-menu-view2 .menu-one-view2 {
  display: inline-block;
  white-space: nowrap;
  width: 5.31rem;
  height: 1.75rem;
  margin-top: 1.5rem;
  margin-right: 1.88rem;
  background: #ffffff;
  border-radius: 1rem;
  border: 0.05rem solid #3e99ff;
}

.left-menu-view2 .menu-one-view-act2 {
  display: inline-block;
  white-space: nowrap;
  width: 5.31rem;
  height: 1.75rem;
  margin-top: 1.5rem;
  margin-right: 1.88rem;
  background: #3e99ff;
  border-radius: 1rem;
}

.left-menu-view2 .menu-one-view2 .menu-one2 {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view2 .menu-one-view2 .menu-one2 .menu-one-txt2 {
  height: 1.75rem;
  font-size: 0.88rem;
  font-weight: 400;
  color: #3e99ff;
  line-height: 1.75rem;
}

.left-menu-view2 .menu-one-view2 .menu-one2 .menu-one-bottom2 {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.left-menu-view2 .menu-one-view2 .menu-one-act2 {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view2 .menu-one-view2 .menu-one-act2 .menu-one-txt2 {
  height: 1.75rem;
  font-size: 0.88rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.75rem;
}

.left-menu-view2 .menu-one-view2 .menu-one-act2 .menu-one-bottom2 {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
/* 选项卡样式3 */

.left-menu-view3 {
  display: flex;
  white-space: nowrap;
  width: 20rem;
  background-color: #ffffff;
  overflow: hidden;
  height: 4.82rem;
  margin-left: 3rem;
  /* 在这里设置导航条高度 */
}

.left-menu-view3 .menu-one-view3 {
  display: inline-block;
  white-space: nowrap;
  width: 4rem;
  height: 1.75rem;
  margin-top: 1.5rem;
  margin-right: 2.13rem;
  background: #ffffff;
  border-radius: 1rem;
}

.left-menu-view3 .menu-one-view-act3 {
  display: inline-block;
  white-space: nowrap;
  width: 4rem;
  height: 1.75rem;
  margin-top: 1.5rem;
  margin-right: 2.13rem;
  background: #ffffff;
  border-radius: 1rem;
}

.left-menu-view3 .menu-one-view3 .menu-one3 {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view3 .menu-one-view3 .menu-one3 .menu-one-txt3 {
  height: 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #999999;
  line-height: 1.75rem;
}

.left-menu-view3 .menu-one-view3 .menu-one3 .menu-one-bottom3 {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.left-menu-view3
  .menu-one-view3
  .menu-one3
  .menu-one-bottom3
  .menu-one-bottom-color3 {
  width: 60%;
  height: 4upx;
}

.left-menu-view3 .menu-one-view3 .menu-one-act3 {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view3 .menu-one-view3 .menu-one-act3 .menu-one-txt3 {
  height: 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #333333;
  line-height: 1.75rem;
}

.left-menu-view3 .menu-one-view3 .menu-one-act3 .menu-one-bottom3 {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.left-menu-view3
  .menu-one-view3
  .menu-one-act3
  .menu-one-bottom3
  .menu-one-bottom-color3 {
  width: 3.75rem;
  height: 0.06rem;
  background: #3e99ff;
}
/* 选项卡样式4 */

.left-menu-view4 {
  display: flex;
  white-space: nowrap;
  width: 41.64rem;
  background-color: #ffffff;
  overflow: hidden;
  height: 4.82rem;
  margin-left: 13.56rem;
  /* 在这里设置导航条高度 */
}

.left-menu-view4 .menu-one-view4 {
  display: inline-block;
  white-space: nowrap;
  width: 13.88rem;
  height: 1.75rem;
  margin-top: 1.5rem;
  margin-right: 2.13rem;
  background: #ffffff;
  border-radius: 1rem;
  cursor: pointer;
}

.left-menu-view4 .menu-one-view-act4 {
  display: inline-block;
  white-space: nowrap;
  width: 13.88rem;
  height: 1.75rem;
  margin-top: 1.5rem;
  margin-right: 2.13rem;
  background: #ffffff;
  border-radius: 1rem;
  cursor: pointer;
}

.left-menu-view4 .menu-one-view4 .menu-one4 {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view4 .menu-one-view4 .menu-one4 .menu-one-txt4 {
  height: 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #666666;
  line-height: 1.75rem;
}

.left-menu-view4 .menu-one-view4 .menu-one4 .menu-one-bottom4 {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.left-menu-view4
  .menu-one-view4
  .menu-one4
  .menu-one-bottom4
  .menu-one-bottom-color4 {
  width: 60%;
  height: 4upx;
}

.left-menu-view4 .menu-one-view4 .menu-one-act4 {
  /* 在这里写 单个按钮样式 */
  position: relative;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-menu-view4 .menu-one-view4 .menu-one-act4 .menu-one-txt4 {
  height: 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #3e99ff;
  line-height: 1.75rem;
}

.left-menu-view4 .menu-one-view4 .menu-one-act4 .menu-one-bottom4 {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.left-menu-view4
  .menu-one-view4
  .menu-one-act4
  .menu-one-bottom4
  .menu-one-bottom-color4 {
  width: 2.25rem;
  height: 0.06rem;
  background: #3e99ff;
}

.el-input__inner {
  height: 2.25rem !important;
  line-height: 2.25rem !important;
}

.el-input__icon {
  line-height: 2.25rem !important;
}

button:after {
  border: none;
}

input[type="file"] {
  display: none;
}

input[type="radio"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

input[type="radio"] + label::before {
  content: "\a0";
  /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  width: 1.13rem;
  height: 1.13rem;
  border-radius: 50%;
  border: 0.06rem solid rgb(168, 168, 169);
  line-height: 1;
  margin-right: 0.75rem;
}

input[type="radio"]:checked + label::before {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #3e99ff;
  background-clip: content-box;
  padding: 0.19rem;
}

.statistics {
  width: 67.5rem;
  margin: 1rem auto 0rem;
  border: solid 0.8px #e8e8e8;
}

.fenye {
  width: 100%;
  margin: 0.8rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Number_pages {
  color: #908c8c;
  margin: 6px 11px;
  line-height: 27px;
}
.el-table .warning-row {
  background: #e5f1f2;
}

.el-table .success-row {
  background: #f0f9eb;
}
  .el-pagination {
  text-align: center;
}
</style>
