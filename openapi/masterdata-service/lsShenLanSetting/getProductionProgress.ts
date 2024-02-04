// JSONResult«质检生产大屏质检生产信息返回VO»
export interface IJSONResult质检生产大屏质检生产信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质检生产大屏质检生产信息返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检生产大屏质检生产信息返回VO
export interface I质检生产大屏质检生产信息返回VO {
    // 大屏左侧质检合格率工序id
    leftQualityPassRatioProcessId: number;
    // 大屏左侧质检合格率工序名称
    leftQualityPassRatioProcessName: string;
    // 大屏左侧质检合格率工序编号
    leftQualityPassRatioProcessCode: string;
    // 大屏左侧当前总质检总量(当天)
    leftTodayTotalQuantity: number;
    // 大屏左侧当前总质检合格数量(当天，合格数量+让步合格数量)
    leftTodayPassQuantity: number;
    // 大屏左侧过去12个月总质检总量
    left12MTotalQuantity: number;
    // 大屏左侧过去12个月合格数量(合格数量+让步合格数量)
    left12MPassQuantity: number;
    // 大屏左侧过去10年总质检总量
    left10YTotalQuantity: number;
    // 大屏左侧过去10年合格数量(合格数量+让步合格数量)
    left10YPassQuantity: number;
    // 大屏右侧质检合格率工序id
    rightQualityPassRatioProcessId: number;
    // 大屏右侧质检合格率工序名称
    rightQualityPassRatioProcessName: string;
    // 大屏右侧质检合格率工序编号
    rightQualityPassRatioProcessCode: string;
    // 大屏右侧当前总质检总量(当天)
    rightTodayTotalQuantity: number;
    // 大屏右侧当前总质检合格数量(当天，合格数量+让步合格数量)
    rightTodayPassQuantity: number;
    // 大屏右侧过去12个月总质检总量
    right12MTotalQuantity: number;
    // 大屏右侧过去12个月合格数量(合格数量+让步合格数量)
    right12MPassQuantity: number;
    // 大屏右侧过去10年总质检总量
    right10YTotalQuantity: number;
    // 大屏右侧过去10年合格数量(合格数量+让步合格数量)
    right10YPassQuantity: number;
    // 大屏中部过去12个月产出
    center12MProduction: I产出类折线图返回VO产出金额报表返回VO;
    // 大屏中部过去10年产出
    center10YProduction: I产出类折线图返回VO产出金额报表返回VO;
}
// 产出类折线图返回VO«产出金额报表返回VO»
export interface I产出类折线图返回VO产出金额报表返回VO {
    // 分组数据
    groupList: I产出类折线图分组返回VO产出金额报表返回VO[];
    // 查询班组集
    classGroupList: IId名称编号VO[];
    // 查询工序集
    processList: IId名称编号VO[];
    // 查询物料集
    majorDataList: IId名称编号VO[];
    // 是否和预期查询相符 Y-相符，不显示异常信息；N-不相符，显示异常信息
    isConsistent: string;
    // 实际查询时间 - 开始
    actualBeginTime: string;
    // 实际查询时间 - 结束
    actualEndTime: string;
    // 实际数据条数
    actualDataCount: number;
}
// 产出类折线图分组返回VO«产出金额报表返回VO»
export interface I产出类折线图分组返回VO产出金额报表返回VO {
    // 数据分组id
    groupId: number;
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 详细点数据
    pointList: I产出金额报表返回VO[];
}
// 产出金额报表返回VO
export interface I产出金额报表返回VO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 产出数量
    produceQuantity: number;
    // 返工产出
    backQuantity: number;
    // 合格产出物料金额
    produceMajorDataAmount: number;
}
// Id，名称，编号VO
export interface IId名称编号VO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
