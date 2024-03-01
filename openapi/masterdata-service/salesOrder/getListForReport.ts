import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/销售订单相关/getListForReportUsingPOST
*/
export default function fetchMethod(options: { data: IOrderProgressStatisticsQueryVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListSalesOrderVO>(
        {
            url: "/masterdata-service/salesOrder/getListForReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 订单进度统计查询VO */
export interface IOrderProgressStatisticsQueryVO {
    /** 客户id集 */
    customerIds?: string[];
    /** 交付日期 - 开始 yyyy-MM-dd HH:mm:ss */
    deliveryDateBegin?: number;
    /** 交付日期 - 结束 yyyy-MM-dd HH:mm:ss */
    deliveryDateEnd?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料id集 */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 销售订单状态 */
    salesOrderStatus?: EOrderProgressStatisticsQueryVO_salesOrderStatus;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«销售订单VO»» */
export interface IJSONResultListSalesOrderVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISalesOrderVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 销售订单VO */
export interface ISalesOrderVO {
    /** 附件 */
    attachedFileKeys?: string;
    /** 业务员id */
    businessUserId?: string;
    /** 关闭原因 */
    closeRemark?: string;
    /** 关闭时间 */
    closeTime?: number;
    /** 关闭人 */
    closeUserId?: string;
    /** 销售订单号 */
    code?: string;
    /** 合同号 */
    contractNo?: string;
    /** 创建时间 */
    createTime?: number;
    /** 客户联系人名称 */
    customerContactsName?: string;
    /** 客户联系人手机 */
    customerContactsPhone?: string;
    /** 客户id */
    customerId?: string;
    /** 发货数量 */
    deliveryQuantity?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** 销售订单状态 */
    handleStatus?: ESalesOrderVO_handleStatus;
    /** id */
    id?: string;
    /** 是否完全转为生产订单 */
    isConvertProduceOrder?: ESalesOrderVO_isConvertProduceOrder;
    /** 销售订单名称 */
    name?: string;
    /** 未发货数量 */
    notDeliveryQuantity?: number;
    /** 未退货数量 */
    notReturnQuantity?: number;
    /** 未出库数量 */
    notStorageOutQuantity?: number;
    /** 订单类型 */
    orderType?: ESalesOrderVO_orderType;
    /** 下单业务部门id */
    placeOrderDepartmentId?: string;
    /** 下单日期(销售日期) */
    placeOrderTime?: number;
    /** 销售订单生产状态 */
    produceStatus?: ESalesOrderVO_produceStatus;
    /** 应收金额 */
    receivableAmount?: number;
    /** 应收余额 */
    receivableBalance?: number;
    /** 已收金额 */
    receivedAmount?: number;
    /** 收货地址 */
    receivingAddress?: string;
    /** 应退金额 */
    refundableAmount?: number;
    /** 备注 */
    remark?: string;
    /** 退货数量 */
    returnQuantity?: number;
    /** 已退金额 */
    returnedAmount?: number;
    /** 出库数量 */
    storageOutQuantity?: number;
}

export enum EOrderProgressStatisticsQueryVO_salesOrderStatus {
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
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

export enum ESalesOrderVO_isConvertProduceOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESalesOrderVO_orderType {
    /** 直售 */
    DIRECT = "DIRECT",
    /** 寄售 */
    CONSIGN = "CONSIGN",
    /** 其他 */
    OTHER = "OTHER"
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
