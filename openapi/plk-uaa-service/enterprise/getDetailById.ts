import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:18100/doc.html#/default/企业客户相关/getDetailByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEnterpriseDetailsResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业详情响应对象 */
export interface IEnterpriseDetailsResponseObject {
    /** 企业id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 企业名称 */
    name?: string;
    /** 管理员手机号 */
    adminPhone?: string;
    /** 专家ids */
    expertUserIdArray?: string[];
    /** 销售经理用户ids */
    salesManagerUserIdArray?: string[];
    /** 交付经理用户ids */
    deliveryManagerUserIdArray?: string[];
    /** 专家名称 */
    expertUserNameList?: string[];
    /** 销售经理用户名称 */
    salesManagerUserNameList?: string[];
    /** 交付经理用户名称 */
    deliveryManagerUserNameList?: string[];
    /** 产品类型 */
    productType?: EEnterpriseDetailsResponseObject_productType;
    /** 到期时间 */
    productServiceExpireTime?: number;
    /** 可用账号数 */
    availableAccountQuantity?: number;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 产品订单列表 */
    productOrderList?: IProductOrderResponseObject[];
    /** 已使用账号数 */
    usedAccountQuantity?: number;
    /** 最近登录系统时间 */
    lastLoginTime?: number;
    /** 是否有企业服务 */
    hasProductService?: EEnterpriseDetailsResponseObject_hasProductService;
}
/** 产品订单响应对象 */
export interface IProductOrderResponseObject {
    /** 订单id */
    id?: string;
    /** 订单编号 */
    code?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 类型 */
    type?: EProductOrderResponseObject_type;
    /** 状态 */
    status?: EProductOrderResponseObject_status;
    /** 产品类型 */
    productType?: EProductOrderResponseObject_productType;
    /** 订单金额(元) */
    orderMoneyQuantity?: number;
    /** 下单用户id */
    placeOrderUserId?: string;
    /** 下单用户名称 */
    placeOrderUserName?: string;
    /** 下单时间 */
    placeOrderTime?: number;
}

export enum EEnterpriseDetailsResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}

export enum EEnterpriseDetailsResponseObject_hasProductService {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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

export enum EProductOrderResponseObject_status {
    /** 待支付 */
    WAIT_PAY = "WAIT_PAY",
    /** 部分支付 */
    PART_PAY = "PART_PAY",
    /** 完成 */
    COMPLETE_PAY = "COMPLETE_PAY"
}

export enum EProductOrderResponseObject_productType {
    /** MES系统 */
    MES = "MES"
}
