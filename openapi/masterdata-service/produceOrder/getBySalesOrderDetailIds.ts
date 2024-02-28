import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/getBySalesOrderDetailIdsUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionOrder>(
        {
            url: "/masterdata-service/produceOrder/getBySalesOrderDetailIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产订单»» */
export interface IJSONResultListProductionOrder {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrder[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单 */
export interface IProductionOrder {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 生产订单号 */
    code?: string;
    /** 所属销售订单id */
    salesOrderId?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 所属销售订单详情id */
    salesOrderDetailId?: string;
    /** 主生产订单号 */
    parentProduceOrderCode?: string;
    /** 订单类型 */
    orderType?: EProductionOrder_orderType;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnitId?: string;
    /** 物料种类 */
    materialType?: string;
    /** 对应工艺路径id */
    routingId?: string;
    /** 对应物料主数据bomid */
    materialBomId?: string;
    /** 总生产数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 累积生产报废数量 */
    produceScrapCount?: number;
    /** 累积委外报废数量 */
    produceEntrustScrapCount?: number;
    /** 当前累积转移数量 - 针对批次转移到其他生产订单 */
    currentChangeCount?: number;
    /** 计划开工日期 */
    beginTime?: number;
    /** 实际开工日期 */
    actualBeginTime?: number;
    /** 计划完工日期 */
    endTime?: number;
    /** 实际完工日期 */
    actualEndTime?: number;
    /** 生产完成时间 */
    produceCompleteTime?: number;
    /** 交期日期 */
    deliveryDate?: number;
    /** 排产类型 */
    planType?: EProductionOrder_planType;
    /** 订单状态 */
    orderStatus?: EProductionOrder_orderStatus;
    /** 订单排产状态 */
    planStatus?: EProductionOrder_planStatus;
    /** 关闭人 */
    closeUserId?: string;
    /** 关闭时间 */
    closeTime?: number;
    /** 关闭原因 */
    closeRemark?: string;
    /** 订单优先级，数值越大优先级越高 */
    priorityLevel?: number;
    /** 备注 */
    remark?: string;
    /** 下单业务部门id */
    placeOrderDepartmentId?: string;
    /** 下单业务部门编号 */
    placeOrderDepartmentCode?: string;
    /** 下单业务部门名称 */
    placeOrderDepartmentName?: string;
}

export enum EProductionOrder_orderType {
    /** 合同生产 */
    CONTRACT = "CONTRACT",
    /** 备库生产 */
    STANDBY = "STANDBY",
    /** 返工生产 */
    REWORK = "REWORK",
    /** 新产品实验生产 */
    TEST = "TEST",
    /** 虚拟订单 */
    VIRTUAL = "VIRTUAL",
    /** 其他订单 */
    OTHER = "OTHER",
    /** 报废补单 */
    SCRAP_SUPPLEMENT = "SCRAP_SUPPLEMENT"
}

export enum EProductionOrder_planType {
    /** 未排产 */
    NOT_PLAN = "NOT_PLAN",
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}

export enum EProductionOrder_orderStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已排产 */
    PLAN = "PLAN",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 部分完成 */
    PART_COMPLETE = "PART_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}

export enum EProductionOrder_planStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}
