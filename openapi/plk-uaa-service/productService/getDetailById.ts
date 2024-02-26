import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品服务相关/getDetailByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultProductServiceDetailsResponseObject>(
        {
            url: "/plk-uaa-service/productService/getDetailById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«产品服务详情响应对象» */
export interface IJSONResultProductServiceDetailsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductServiceDetailsResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 产品服务详情响应对象 */
export interface IProductServiceDetailsResponseObject {
    /** 产品服务id */
    id?: number;
    /** 企业id */
    enterpriseId?: number;
    /** 企业名称 */
    enterpriseName?: string;
    /** 企业编号 */
    enterpriseCode?: string;
    /** 产品服务编号 */
    code?: string;
    /** 产品服务类型 */
    type?: string;
    /** 产品服务状态 */
    status?: string;
    /** 产品类型 */
    productType?: string;
    /** 到期时间 */
    expireTime?: string;
    /** 账号数 */
    availableAccountQuantity?: number;
    /** 产品模块数组 */
    productModuleArray?: string[];
    /** 产品订单列表 */
    productOrderList?: IProductOrderResponseObject[];
    /** 产品服务日志列表 */
    productServiceLogList?: IProductServiceLogResponseObject[];
}
/** 产品订单响应对象 */
export interface IProductOrderResponseObject {
    /** 订单id */
    id?: number;
    /** 订单编号 */
    code?: string;
    /** 企业id */
    enterpriseId?: number;
    /** 类型 */
    type?: string;
    /** 状态 */
    status?: string;
    /** 产品类型 */
    productType?: string;
    /** 订单金额(元) */
    orderMoneyQuantity?: number;
    /** 下单用户id */
    placeOrderUserId?: number;
    /** 下单用户名称 */
    placeOrderUserName?: string;
    /** 下单时间 */
    placeOrderTime?: string;
}
/** 产品服务日志响应对象 */
export interface IProductServiceLogResponseObject {
    /** 操作类型 */
    type?: string;
    /** 产品服务类型 */
    productServiceType?: string;
    /** 产品服务到期时间 */
    productServiceExpireTime?: string;
    /** 产品服务可用账号数 */
    productServiceAvailableAccountQuantity?: number;
    /** 产品类型 */
    productType?: string;
    /** 产品订单编号 */
    productOrderCode?: string;
    /** 产品订单类型 */
    productOrderType?: string;
    /** 产品订单加购类型 */
    productOrderAppendType?: string;
    /** 产品订单延期类型 */
    productOrderDelayType?: string;
    /** 创建时间 */
    createTime?: string;
}
