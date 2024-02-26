import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品订单相关/appendBuyAddUsingPOST
*/
export default function fetchMethod(options: { data: IAddProductOrderAddedARequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/productOrder/appendBuyAdd",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 加购产品订单新增请求对象 */
export interface IAddProductOrderAddedARequestObject {
    /** 企业id */
    enterpriseId?: number;
    /** 加购类型非法传递, 默认传 MES  */
    appendType?: EAddProductOrderAddedARequestObject_appendType;
    /** 加购产品类型非法传递, 默认传 MES  */
    productType?: EAddProductOrderAddedARequestObject_productType;
    /** 加购产品模块 */
    productModuleArray?: string[];
    /** 购买时长(天) */
    buyDurationQuantity?: number;
    /** 购买账号数 */
    buyAccountQuantity?: number;
    /** 订单金额(元) */
    orderMoneyQuantity?: number;
    /** 合同签约时间 */
    contractTime?: string;
    /** 预计交付日期 */
    planDeliveryTime?: string;
    /** 预计到期日期 */
    planExpireTime?: string;
    /** 付款记录列表 */
    payRecordList?: IProductOrderPaymentHistoryEditRequestObject[];
}
/** 产品订单付款记录编辑请求对象 */
export interface IProductOrderPaymentHistoryEditRequestObject {
    /** 付款记录id */
    id?: number;
    /** 计划付款日期 */
    planPayTime?: string;
    /** 应付金额(元) */
    payableQuantity?: number;
    /** 实际付款日期 */
    realPayTime?: string;
    /** 实付金额(元) */
    actualPayQuantity?: number;
    /** 状态 */
    status?: EProductOrderPaymentHistoryEditRequestObject_status;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EAddProductOrderAddedARequestObject_appendType {
    /** 产品模块 */
    PRODUCT_MODULE = "PRODUCT_MODULE",
    /** 时长 */
    DURATION = "DURATION",
    /** 用户账号数 */
    USER_ACCOUNT = "USER_ACCOUNT"
}

export enum EAddProductOrderAddedARequestObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductOrderPaymentHistoryEditRequestObject_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 已支付 */
    ALREADY_PAY = "ALREADY_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}
