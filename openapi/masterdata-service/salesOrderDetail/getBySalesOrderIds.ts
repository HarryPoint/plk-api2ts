import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/销售订单明细相关/getBySalesOrderIdsUsingPOST
*/
export default function fetchMethod(options: { data: number[]params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListSalesOrderDetails>(
        {
            url: "/masterdata-service/salesOrderDetail/getBySalesOrderIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«销售订单明细»» */
export interface IJSONResultListSalesOrderDetails {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISalesOrderDetail[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 销售订单明细 */
export interface ISalesOrderDetail {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 所属销售订单id */
    salesOrderId?: number;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料code */
    materialCode?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 计量单位 */
    unitId?: number;
    /** 对应工艺路径id */
    routingId?: number;
    /** 对应物料主数据bomid */
    materialBomId?: number;
    /** 总销售数量 */
    totalQuantity?: number;
    /** 销售单价 */
    price?: number;
    /** 税率 */
    taxRate?: number;
    /** 含税单价 */
    taxRatePrice?: number;
    /** 总销售金额 */
    totalAmount?: number;
    /** 销售订单详情状态 */
    handleStatus?: ESalesOrderDetail_handleStatus;
    /** 销售订单生产状态 */
    produceStatus?: ESalesOrderDetail_produceStatus;
    /** 总计划数量 -  此销售订单下的 所有 生产订单 数量的和 */
    totalPlanQuantity?: number;
    /** 已排产数量 */
    planQuantity?: number;
    /** 已转换数量 */
    convertQuantity?: number;
    /** 未转换数量 */
    notConvertQuantity?: number;
    /** 总合格产出数量 */
    totalProduceQuantity?: number;
    /** 交货日期 */
    deliveryDate?: string;
    /** 关闭人 */
    closeUserId?: number;
    /** 关闭时间 */
    closeTime?: string;
    /** 关闭原因 */
    closeRemark?: string;
    /** 发货数量 */
    deliveryQuantity?: number;
    /** 未发货数量 */
    notDeliveryQuantity?: number;
    /** 出库数量 */
    storageOutQuantity?: number;
    /** 未出库数量 */
    notStorageOutQuantity?: number;
    /** 退货数量 */
    returnQuantity?: number;
    /** 未退货数量 */
    notReturnQuantity?: number;
    /** 应收金额 */
    receivableAmount?: number;
    /** 已收金额 */
    receivedAmount?: number;
    /** 应退金额 */
    refundableAmount?: number;
    /** 已退金额 */
    returnedAmount?: number;
    /** 应收余额 */
    receivableBalance?: number;
    /** 途径最后一道区域id */
    lastAreaId?: number;
    /** 途径最后一道区域时间 */
    lastAreaTime?: string;
    /** 途径区域id集 - json */
    crossAreaIds?: string;
}

export enum ESalesOrderDetail_handleStatus {
    /** 未转生产订单 */
    CREATED = "CREATED",
    /** 部分已转 */
    PART = "PART",
    /** 已转生产订单 */
    ALL = "ALL"
}

export enum ESalesOrderDetail_produceStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
