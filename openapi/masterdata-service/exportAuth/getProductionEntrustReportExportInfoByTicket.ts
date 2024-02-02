// JSONResult«导出信息«委外报表导出VO»»
export interface IJSONResult导出信息委外报表导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息委外报表导出VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«委外报表导出VO»
export interface I导出信息委外报表导出VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I委外报表导出VO[];
}
// 委外报表导出VO
export interface I委外报表导出VO {
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 数据时间
    dataTime: string;
    // 委外总数(委外发出)
    produceEntrustQuantity: number;
    // 委外返回数量(委外返回)
    produceEntrustBackTotalQuantity: number;
    // 委外返回数量(委外合格返回)
    produceEntrustBackQuantity: number;
    // 委外报废数量(委外报废)
    produceEntrustScrapQuantity: number;
}
