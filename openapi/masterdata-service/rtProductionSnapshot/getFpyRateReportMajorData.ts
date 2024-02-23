import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getFpyRateReportMajorDataUsingPOST
export default function fetchMethod(data: IOutputClassReportSearchVO, params: { enterpriseId: number }) {
    return post<IJSONResultOutputLineChartReturnsVOPassthroughReportReturnsVO['data']>({
      url: "/masterdata-service/rtProductionSnapshot/getFpyRateReportMajorData",
      data,
      params,
    });
}
// 产出类报表搜索VO
export interface IOutputClassReportSearchVO {
    // 班组id集
    classGroupIds: number[];
    // 物料id集
    materialIds: number[];
    // 工序id集
    processIds: number[];
    // 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 查询时间维度类型
    timeType: string;
}
// JSONResult«产出类折线图返回VO«直通报表返回VO»»
export interface IJSONResultOutputLineChartReturnsVOPassthroughReportReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOutputLineChartReturnVODirectReportReturnVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产出类折线图返回VO«直通报表返回VO»
export interface IOutputLineChartReturnVODirectReportReturnVO {
    // 分组数据
    groupList: IOutputLineChartGroupReturnVOPassThroughReportReturnVO[];
    // 查询班组集
    classGroupList: IIdNameNumberVO[];
    // 查询工序集
    processList: IIdNameNumberVO[];
    // 查询物料集
    majorDataList: IIdNameNumberVO[];
    // 是否和预期查询相符 Y-相符，不显示异常信息；N-不相符，显示异常信息
    isConsistent: string;
    // 实际查询时间 - 开始
    actualBeginTime: string;
    // 实际查询时间 - 结束
    actualEndTime: string;
    // 实际数据条数
    actualDataCount: number;
}
// 产出类折线图分组返回VO«直通报表返回VO»
export interface IOutputLineChartGroupReturnVOPassThroughReportReturnVO {
    // 数据分组id
    groupId: number;
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 详细点数据
    pointList: IThePassThroughReportReturnsVO[];
}
// 直通报表返回VO
export interface IThePassThroughReportReturnsVO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 所有工序报废
    scrapQuantity: number;
    // 最后工序合格产出
    completeProduceQuantity: number;
    // 直通率
    fpyRatio: number;
    // 直通率-大屏展示
    fpyRatioScale2: number;
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
