// JSONResult«西偌帕斯大屏返回VO»
export interface IJSONResult西偌帕斯大屏返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I西偌帕斯大屏返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 西偌帕斯大屏返回VO
export interface I西偌帕斯大屏返回VO {
    // 7天 计划VS实际产出
    planProduces: I西偌帕斯大屏7天计划VS实际产出VO[];
    // 本月关键指标
    monthIndexWork: I西偌帕斯大屏关键指标VO;
    // 24小时关键指标
    dayIndexWork: I西偌帕斯大屏关键指标VO;
    // 14天 直通率
    fpyRates: I西偌帕斯大屏14天直通率VO[];
    // 不良明细前五
    scrapTypes: I西偌帕斯大屏不良明细前五产出VO[];
    // 主要工序24小时产出
    processProduces: I西偌帕斯大屏主要工序24小时产出VO[];
    // 主要产品14天 直通率
    majorDataFpyRate: I产出类折线图分组返回VO直通报表返回VO[];
    // 主要工序7天良品率
    processGoodProductRate: I产出类折线图分组返回VO良品与报废报表返回VO[];
}
// 西偌帕斯大屏7天计划VS实际产出VO
export interface I西偌帕斯大屏7天计划VS实际产出VO {
    // 数据时间（时间戳）
    dataTime: string;
    // 计划数
    planQuantity: number;
    // 实际产出数
    produceQuantity: number;
}
// 西偌帕斯大屏关键指标VO
export interface I西偌帕斯大屏关键指标VO {
    // 直通率
    fpyRate: number;
    // 报废数
    scrapQuantity: number;
}
// 西偌帕斯大屏14天 直通率VO
export interface I西偌帕斯大屏14天直通率VO {
    // 数据时间（时间戳）
    dataTime: string;
    // 直通率
    fpyRate: number;
}
// 西偌帕斯大屏不良明细前五产出VO
export interface I西偌帕斯大屏不良明细前五产出VO {
    // 异常分类id
    produceAbnormalCategoryId: number;
    // 异常分类名称
    produceAbnormalCategoryName: string;
    // 异常分类编号
    produceAbnormalCategoryCode: string;
    // 报废数
    scrapQuantity: number;
}
// 西偌帕斯大屏主要工序24小时产出VO
export interface I西偌帕斯大屏主要工序24小时产出VO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 产出数
    produceQuantity: number;
    // 产出目标数
    produceTargetQuantity: number;
}
// 产出类折线图分组返回VO«直通报表返回VO»
export interface I产出类折线图分组返回VO直通报表返回VO {
    // 数据分组id
    groupId: number;
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 详细点数据
    pointList: I直通报表返回VO[];
}
// 直通报表返回VO
export interface I直通报表返回VO {
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
// 产出类折线图分组返回VO«良品与报废报表返回VO»
export interface I产出类折线图分组返回VO良品与报废报表返回VO {
    // 数据分组id
    groupId: number;
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 详细点数据
    pointList: I良品与报废报表返回VO[];
}
// 良品与报废报表返回VO
export interface I良品与报废报表返回VO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 合格加报废总量
    totalQuantity: number;
    // 合格数量
    produceQuantity: number;
    // 合格率
    produceRatio: number;
    // 合格率-大屏展示
    produceRatioScale2: number;
    // 报废数量
    scrapQuantity: number;
    // 报废率
    scrapRatio: number;
    // 报废率-大屏展示
    scrapRatioScale2: number;
}
