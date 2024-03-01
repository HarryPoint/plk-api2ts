import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/getDetailByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultEnterpriseDetailsResponseObject>(
        {
            url: "/plk-uaa-service/enterprise/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«企业详情响应对象» */
export interface IJSONResultEnterpriseDetailsResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEnterpriseDetailsResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业详情响应对象 */
export interface IEnterpriseDetailsResponseObject {
    /** 管理员手机号 */
    adminPhone?: string;
    /** 可用账号数 */
    availableAccountQuantity?: number;
    /** 编号 */
    code?: string;
    /** 交付经理用户ids */
    deliveryManagerUserIdArray?: string[];
    /** 交付经理用户名称 */
    deliveryManagerUserNameList?: string[];
    /** 专家ids */
    expertUserIdArray?: string[];
    /** 专家名称 */
    expertUserNameList?: string[];
    /** 是否有企业服务 */
    hasProductService?: EEnterpriseDetailsResponseObject_hasProductService;
    /** 企业id */
    id?: string;
    /** 最近登录系统时间 */
    lastLoginTime?: number;
    /** 企业名称 */
    name?: string;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 产品订单列表 */
    productOrderList?: IProductOrderResponseObject[];
    /** 到期时间 */
    productServiceExpireTime?: number;
    /** 产品类型 */
    productType?: EEnterpriseDetailsResponseObject_productType;
    /** 销售经理用户ids */
    salesManagerUserIdArray?: string[];
    /** 销售经理用户名称 */
    salesManagerUserNameList?: string[];
    /** 已使用账号数 */
    usedAccountQuantity?: number;
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

export enum EEnterpriseDetailsResponseObject_hasProductService {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterpriseDetailsResponseObject_productType {
    /** MES系统 */
    MES = "MES"
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
