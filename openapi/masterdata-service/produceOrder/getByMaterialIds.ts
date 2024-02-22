import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产订单相关/getByMaterialIdsUsingPOST
export function fetchMethod(data: number[], params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/produceOrder/getByMaterialIds",
      data,
      params,
    });
}
// JSONResult«List«生产订单»»
export interface IJSONResultListProductionOrder {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionOrder[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单
export interface IProductionOrder {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 生产订单号
    code: string;
    // 所属销售订单id
    salesOrderId: number;
    // 销售订单号
    salesOrderCode: string;
    // 所属销售订单详情id
    salesOrderDetailId: number;
    // 主生产订单号
    parentProduceOrderCode: string;
    // 订单类型
    orderType: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料规格
    materialSpec: string;
    // 对应物料单位
    materialUnitId: number;
    // 物料种类
    materialType: string;
    // 对应工艺路径id
    routingId: number;
    // 对应物料主数据bomid
    materialBomId: number;
    // 总生产数量
    totalCount: number;
    // 当前生产数量
    currentCount: number;
    // 当前累积报废数量
    currentScrapCount: number;
    // 累积生产报废数量
    produceScrapCount: number;
    // 累积委外报废数量
    produceEntrustScrapCount: number;
    // 当前累积转移数量 - 针对批次转移到其他生产订单
    currentChangeCount: number;
    // 计划开工日期
    beginTime: string;
    // 实际开工日期
    actualBeginTime: string;
    // 计划完工日期
    endTime: string;
    // 实际完工日期
    actualEndTime: string;
    // 生产完成时间
    produceCompleteTime: string;
    // 交期日期
    deliveryDate: string;
    // 排产类型
    planType: string;
    // 订单状态
    orderStatus: string;
    // 订单排产状态
    planStatus: string;
    // 关闭人
    closeUserId: number;
    // 关闭时间
    closeTime: string;
    // 关闭原因
    closeRemark: string;
    // 订单优先级，数值越大优先级越高
    priorityLevel: number;
    // 备注
    remark: string;
    // 下单业务部门id
    placeOrderDepartmentId: number;
    // 下单业务部门编号
    placeOrderDepartmentCode: string;
    // 下单业务部门名称
    placeOrderDepartmentName: string;
}
