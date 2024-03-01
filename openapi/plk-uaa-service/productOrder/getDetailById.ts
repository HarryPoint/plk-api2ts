import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品订单相关/getDetailByIdUsingGET_2
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductOrderDetailsResponseObject>(
        {
            url: "/plk-uaa-service/productOrder/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«产品订单详情响应对象» */
export interface IJSONResultProductOrderDetailsResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductOrderDetailsResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产品订单详情响应对象 */
export interface IProductOrderDetailsResponseObject {
    /** 加购类型 */
    appendType?: EProductOrderDetailsResponseObject_appendType;
    /** 购买账号数 */
    buyAccountQuantity?: number;
    /** 购买时长(天) */
    buyDurationQuantity?: number;
    /** 订单编号 */
    code?: string;
    /** 合同签约时间 */
    contractTime?: number;
    /** 延长时长(天) */
    delayDurationQuantity?: number;
    /** 延期原因 */
    delayReason?: string;
    /** 延期类型 */
    delayType?: EProductOrderDetailsResponseObject_delayType;
    /** 企业编号 */
    enterpriseCode?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 企业名称 */
    enterpriseName?: string;
    /** 订单id */
    id?: string;
    /** 订单金额(元) */
    orderMoneyQuantity?: number;
    /** 付款记录列表 */
    payRecordList?: IProductOrderPaymentHistoryDetailsResponseObject[];
    /** 下单时间 */
    placeOrderTime?: number;
    /** 下单用户id */
    placeOrderUserId?: string;
    /** 下单用户名称 */
    placeOrderUserName?: string;
    /** 预计交付日期 */
    planDeliveryTime?: number;
    /** 预计到期日期 */
    planExpireTime?: number;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 服务信息 */
    productOrderServiceSnapshot?: IProductOrderServiceInformationResponseObject;
    /** 产品类型 */
    productType?: EProductOrderDetailsResponseObject_productType;
    /** 状态 */
    status?: EProductOrderDetailsResponseObject_status;
    /** 类型 */
    type?: EProductOrderDetailsResponseObject_type;
}
/** 产品订单付款记录详情响应对象 */
export interface IProductOrderPaymentHistoryDetailsResponseObject {
    /** 实付金额(元) */
    actualPayQuantity?: number;
    /** 付款记录id */
    id?: string;
    /** 应付金额(元) */
    payableQuantity?: number;
    /** 计划付款日期 */
    planPayTime?: number;
    /** 实际付款日期 */
    realPayTime?: number;
    /** 状态 */
    status?: EProductOrderPaymentHistoryDetailsResponseObject_status;
}
/** 产品订单服务信息响应对象 */
export interface IProductOrderServiceInformationResponseObject {
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 到期时间 */
    expireTime?: number;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 产品类型 */
    productType?: EProductOrderServiceInformationResponseObject_productType;
}

export enum EProductOrderDetailsResponseObject_appendType {
    /** 产品模块 */
    PRODUCT_MODULE = "PRODUCT_MODULE",
    /** 时长 */
    DURATION = "DURATION",
    /** 用户账号数 */
    USER_ACCOUNT = "USER_ACCOUNT"
}

export enum EProductOrderDetailsResponseObject_delayType {
    /** 试用延期 */
    TRIAL = "TRIAL",
    /** 正式延期 */
    FORMAL = "FORMAL"
}

export enum EProductOrderDetailsResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductOrderDetailsResponseObject_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 部分支付 */
    PART_PAY = "PART_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}

export enum EProductOrderDetailsResponseObject_type {
    /** 新购 */
    NEW_BUY = "NEW_BUY",
    /** 加购 */
    APPEND_BUY = "APPEND_BUY",
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式延期 */
    FORMAL_DELAY = "FORMAL_DELAY",
    /** 使用延期 */
    TRIAL_DELAY = "TRIAL_DELAY"
}

export enum EProductOrderPaymentHistoryDetailsResponseObject_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 已支付 */
    ALREADY_PAY = "ALREADY_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}

export enum EProductOrderServiceInformationResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}
