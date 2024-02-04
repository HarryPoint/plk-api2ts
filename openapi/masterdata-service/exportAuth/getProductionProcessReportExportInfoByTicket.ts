// JSONResult«导出信息«产出报表导出VO»»
export interface IJSONResult导出信息产出报表导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息产出报表导出VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«产出报表导出VO»
export interface I导出信息产出报表导出VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I产出报表导出VO[];
}
// 产出报表导出VO
export interface I产出报表导出VO {
    // 数据分组名称
    groupName: string;
    // 数据分组编号
    groupCode: string;
    // 班组信息集
    classGroupList: string;
    // 工序信息集
    processList: string;
    // 物料信息集
    majorDataList: string;
    // 数据时间
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
