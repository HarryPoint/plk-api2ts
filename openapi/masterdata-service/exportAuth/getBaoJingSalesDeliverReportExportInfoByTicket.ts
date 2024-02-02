// JSONResult«导出信息«宝晶销售发货报表表格返回VO»»
export interface IJSONResult导出信息宝晶销售发货报表表格返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息宝晶销售发货报表表格返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«宝晶销售发货报表表格返回VO»
export interface I导出信息宝晶销售发货报表表格返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I宝晶销售发货报表表格返回VO[];
}
// 宝晶销售发货报表表格返回VO
export interface I宝晶销售发货报表表格返回VO {
    // 发货日期
    deliverDate: string;
    // 单据编号
    workOrderNo: string;
    // 销售订单id
    salesOrderId: number;
    // 销售订单编号
    salesOrderNo: string;
    // 业务员id
    businessUserId: number;
    // 业务员名称
    businessUserName: string;
    // 客户id
    customerId: number;
    // 客户名称
    customerName: string;
    // 产品id
    majorDataId: number;
    // 产品名称
    majorDataName: string;
    // 产品编号
    majorDataCode: string;
    // 产品规格
    majorDataSpec: string;
    // 产品材质
    majorDataTexture: string;
    // 发货地点
    deliveryBeginPlace: string;
    // 交货地点
    deliveryEndPlace: string;
    // 承运人
    contractor: string;
    // 运单号
    trackNo: string;
    // 单据类型
    orderType: string;
    // 需求日期
    demandDate: string;
    // 需求数量
    demandQuantity: number;
    // 实际送达数量
    actualQuantity: number;
    // 包装方式
    packingType: string;
    // 备注
    remark: string;
    // 数据id
    detailDataId: number;
    // 包材数据列表
    packagingMaterialValueList: IId值VO[];
}
// Id，值VO
export interface IId值VO {
    // id
    id: number;
    // 值
    value: number;
}
