import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品服务相关/getDetailByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductServiceDetailsResponseObject>(
        {
            url: "/plk-uaa-service/productService/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«产品服务详情响应对象» */
export interface IJSONResultProductServiceDetailsResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductServiceDetailsResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产品服务详情响应对象 */
export interface IProductServiceDetailsResponseObject {
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 产品服务编号 */
    code?: string;
    /** 企业编号 */
    enterpriseCode?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 企业名称 */
    enterpriseName?: string;
    /** 到期时间 */
    expireTime?: number;
    /** 产品服务id */
    id?: string;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 产品订单列表 */
    productOrderList?: IProductOrderResponseObject[];
    /** 产品服务日志列表 */
    productServiceLogList?: IProductServiceLogResponseObject[];
    /** 产品类型 */
    productType?: EProductServiceDetailsResponseObject_productType;
    /** 产品服务状态 */
    status?: EProductServiceDetailsResponseObject_status;
    /** 产品服务类型 */
    type?: EProductServiceDetailsResponseObject_type;
}
/** 产品订单响应对象 */
export interface IProductOrderResponseObject {
    /** 订单编号 */
    code?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 订单id */
    id?: string;
    /** 订单金额(元) */
    orderMoneyQuantity?: number;
    /** 下单时间 */
    placeOrderTime?: number;
    /** 下单用户id */
    placeOrderUserId?: string;
    /** 下单用户名称 */
    placeOrderUserName?: string;
    /** 产品类型 */
    productType?: EProductOrderResponseObject_productType;
    /** 状态 */
    status?: EProductOrderResponseObject_status;
    /** 类型 */
    type?: EProductOrderResponseObject_type;
}
/** 产品服务日志响应对象 */
export interface IProductServiceLogResponseObject {
    /** 创建时间 */
    createTime?: number;
    /** 产品订单加购类型 */
    productOrderAppendType?: EProductServiceLogResponseObject_productOrderAppendType;
    /** 产品订单编号 */
    productOrderCode?: string;
    /** 产品订单延期类型 */
    productOrderDelayType?: EProductServiceLogResponseObject_productOrderDelayType;
    /** 产品订单类型 */
    productOrderType?: EProductServiceLogResponseObject_productOrderType;
    /** 产品服务可用账号数 */
    productServiceAvailableAccountQuantity?: number;
    /** 产品服务到期时间 */
    productServiceExpireTime?: number;
    /** 产品服务类型 */
    productServiceType?: EProductServiceLogResponseObject_productServiceType;
    /** 产品类型 */
    productType?: EProductServiceLogResponseObject_productType;
    /** 操作类型 */
    type?: EProductServiceLogResponseObject_type;
}

export enum EProductServiceDetailsResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductServiceDetailsResponseObject_status {
    /** 服务中 */
    ON = "ON",
    /** 服务过期 */
    EXPIRE = "EXPIRE",
    /** 服务已停用 */
    INVALID = "INVALID"
}

export enum EProductServiceDetailsResponseObject_type {
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式 */
    FORMAL = "FORMAL"
}

export enum EProductOrderResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductOrderResponseObject_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 部分支付 */
    PART_PAY = "PART_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}

export enum EProductOrderResponseObject_type {
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

export enum EProductServiceLogResponseObject_productOrderAppendType {
    /** 产品模块 */
    PRODUCT_MODULE = "PRODUCT_MODULE",
    /** 时长 */
    DURATION = "DURATION",
    /** 用户账号数 */
    USER_ACCOUNT = "USER_ACCOUNT"
}

export enum EProductServiceLogResponseObject_productOrderDelayType {
    /** 试用延期 */
    TRIAL = "TRIAL",
    /** 正式延期 */
    FORMAL = "FORMAL"
}

export enum EProductServiceLogResponseObject_productOrderType {
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

export enum EProductServiceLogResponseObject_productServiceType {
    /** 试用 */
    TRIAL = "TRIAL",
    /** 正式 */
    FORMAL = "FORMAL"
}

export enum EProductServiceLogResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EProductServiceLogResponseObject_type {
    /** 首次生成正式产品服务 */
    CREATE_FORMAL = "CREATE_FORMAL",
    /** 加购正式产品服务 */
    APPEND_FORMAL = "APPEND_FORMAL",
    /** 延期正式产品服务 */
    DELAY_FORMAL = "DELAY_FORMAL",
    /** 首次生成试用产品服务 */
    CREATE_TRIAL = "CREATE_TRIAL",
    /** 延期试用产品服务 */
    DELAY_TRIAL = "DELAY_TRIAL",
    /** 停用试用产品服务 */
    INVALID_FORMAL = "INVALID_FORMAL",
    /** 试用转正式服务 */
    SWITCH_TRIAL_TO_FORMAL = "SWITCH_TRIAL_TO_FORMAL"
}
