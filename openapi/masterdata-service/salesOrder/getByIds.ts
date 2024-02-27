import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/销售订单相关/getByIdsUsingPOST_6
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListSalesOrderVO>(
        {
            url: "/masterdata-service/salesOrder/getByIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«销售订单VO»» */
export interface IJSONResultListSalesOrderVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISalesOrderVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 销售订单VO */
export interface ISalesOrderVO {
    /** id */
    id?: string;
    /** 创建时间 */
    createTime?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** 销售订单名称 */
    name?: string;
    /** 销售订单号 */
    code?: string;
    /** 订单类型 */
    orderType?: ESalesOrderVO_orderType;
    /** 客户id */
    customerId?: string;
    /** 合同号 */
    contractNo?: string;
    /** 备注 */
    remark?: string;
    /** 下单日期(销售日期) */
    placeOrderTime?: number;
    /** 下单业务部门id */
    placeOrderDepartmentId?: string;
    /** 业务员id */
    businessUserId?: string;
    /** 收货地址 */
    receivingAddress?: string;
    /** 客户联系人名称 */
    customerContactsName?: string;
    /** 客户联系人手机 */
    customerContactsPhone?: string;
    /** 附件 */
    attachedFileKeys?: string;
    /** 是否完全转为生产订单 */
    isConvertProduceOrder?: ESalesOrderVO_isConvertProduceOrder;
    /** 销售订单状态 */
    handleStatus?: ESalesOrderVO_handleStatus;
    /** 销售订单生产状态 */
    produceStatus?: ESalesOrderVO_produceStatus;
    /** 关闭人 */
    closeUserId?: string;
    /** 关闭时间 */
    closeTime?: number;
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
}

export enum ESalesOrderVO_orderType {
    /** 直售 */
    DIRECT = "DIRECT",
    /** 寄售 */
    CONSIGN = "CONSIGN",
    /** 其他 */
    OTHER = "OTHER"
}

export enum ESalesOrderVO_isConvertProduceOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESalesOrderVO_handleStatus {
    /** 未转生产订单 */
    CREATED = "CREATED",
    /** 部分已转 */
    CONVERTING = "CONVERTING",
    /** 已转生产订单 */
    CONVERED = "CONVERED",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum ESalesOrderVO_produceStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
