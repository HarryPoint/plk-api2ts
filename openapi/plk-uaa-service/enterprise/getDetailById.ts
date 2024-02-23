import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/企业客户相关/getDetailByIdUsingGET_1
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultEnterpriseDetailsResponseObject>({
        url: "/plk-uaa-service/enterprise/getDetailById",
        method: "get",
        params,
    });
}
// JSONResult«企业详情响应对象»
export interface IJSONResultEnterpriseDetailsResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEnterpriseDetailsResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 企业详情响应对象
export interface IEnterpriseDetailsResponseObject {
    // 企业id
    id: number;
    // 编号
    code: string;
    // 企业名称
    name: string;
    // 管理员手机号
    adminPhone: string;
    // 专家ids
    expertUserIdArray: number[];
    // 销售经理用户ids
    salesManagerUserIdArray: number[];
    // 交付经理用户ids
    deliveryManagerUserIdArray: number[];
    // 专家名称
    expertUserNameList: string[];
    // 销售经理用户名称
    salesManagerUserNameList: string[];
    // 交付经理用户名称
    deliveryManagerUserNameList: string[];
    // 产品类型
    productType: string;
    // 到期时间
    productServiceExpireTime: string;
    // 可用账号数
    availableAccountQuantity: number;
    // 产品模块数组
    productModuleArray: string[];
    // 产品订单列表
    productOrderList: IProductOrderResponseObject[];
    // 已使用账号数
    usedAccountQuantity: number;
    // 最近登录系统时间
    lastLoginTime: string;
    // 是否有企业服务
    hasProductService: string;
}
// 产品订单响应对象
export interface IProductOrderResponseObject {
    // 订单id
    id: number;
    // 订单编号
    code: string;
    // 企业id
    enterpriseId: number;
    // 类型
    type: string;
    // 状态
    status: string;
    // 产品类型
    productType: string;
    // 订单金额(元)
    orderMoneyQuantity: number;
    // 下单用户id
    placeOrderUserId: number;
    // 下单用户名称
    placeOrderUserName: string;
    // 下单时间
    placeOrderTime: string;
}
