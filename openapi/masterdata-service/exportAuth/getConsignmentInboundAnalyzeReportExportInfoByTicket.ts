// JSONResult«导出信息«寄售入库分析报表返回VO»»
export interface IJSONResult导出信息寄售入库分析报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息寄售入库分析报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«寄售入库分析报表返回VO»
export interface I导出信息寄售入库分析报表返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I寄售入库分析报表返回VO[];
}
// 寄售入库分析报表返回VO
export interface I寄售入库分析报表返回VO {
    // 单据编号
    workOrderNo: string;
    // 销售订单编号
    salesOrderNo: string;
    // 客户
    customer: string;
    // 业务员
    businessMan: string;
    // 入库日期
    inboundDate: string;
    // 入库类型
    inboundType: string;
    // 入库单价
    inboundPrice: number;
    // 产品名称
    productName: string;
    // 规格型号
    productSpec: string;
    // 仓库
    warehouse: string;
    // 入库数量
    inboundQty: number;
    // 损耗数量
    numOfLoss: number;
    // 入库金额
    inboundAmount: number;
    // 产品编号
    productNo: string;
    // 备注
    remark: string;
}
