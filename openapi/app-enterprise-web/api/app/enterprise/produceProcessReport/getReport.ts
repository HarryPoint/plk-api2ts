import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/产出报表(按工序统计)相关/getReportUsingPOST_11
export default function fetchMethod(data: IOutputClassReportSearchVO) {
    return http<IJSONResultOutputLineChartReturnsVOOutputReportReturnsVO>({
        url: "/app-enterprise-web/api/app/enterprise/produceProcessReport/getReport",
        method: "post",
        data,
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
// JSONResult«产出类折线图返回VO«产出报表返回VO»»
export interface IJSONResultOutputLineChartReturnsVOOutputReportReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOutputLineChartReturnsVOOutputReportReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产出类折线图返回VO«产出报表返回VO»
export interface IOutputLineChartReturnsVOOutputReportReturnsVO {
    // 分组数据
    groupList: IOutputLineChartGroupReturnsVOOutputReportReturnsVO[];
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
// 产出类折线图分组返回VO«产出报表返回VO»
export interface IOutputLineChartGroupReturnsVOOutputReportReturnsVO {
    // 数据分组id
    groupId: number;
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 详细点数据
    pointList: ITheOutputReportReturnsVO[];
}
// 产出报表返回VO
export interface ITheOutputReportReturnsVO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 总产出
    totalProduceQuantity: number;
    // 产出数量
    produceQuantity: number;
    // 报废数量
    scrapQuantity: number;
    // 返工产出
    backQuantity: number;
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
