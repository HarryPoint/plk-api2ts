// JSONResult«西偌帕斯大屏设置返回VO»
export interface IJSONResult西偌帕斯大屏设置返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I西偌帕斯大屏设置返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 西偌帕斯大屏设置返回VO
export interface I西偌帕斯大屏设置返回VO {
    // 主要物料信息集
    majorDatas: IIdNameNumberVO[];
    // 主要工序id集
    processIds: number[];
    // 7天计划产出设置
    planSettings: I西偌帕斯大屏计划设置返回VO[];
    // 工序目标值设置集
    processTargetSettings: I西偌帕斯大屏工序目标设置返回VO[];
    // 报废数据前五统计时间类型
    scrapStatisticsTime: string;
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
// 西偌帕斯大屏计划设置返回VO
export interface I西偌帕斯大屏计划设置返回VO {
    // 日程安排日期
    scheduleDate: string;
    // 手动排产数量
    handPlanQuantity: number;
    // 计划数
    planQuantity: number;
}
// 西偌帕斯大屏工序目标设置返回VO
export interface I西偌帕斯大屏工序目标设置返回VO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 产出目标数
    produceTargetQuantity: number;
}
