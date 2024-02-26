import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安全库存变更申请相关/addUsingPOST_7
*/
export default function fetchMethod(data: ISecurityInventoryChangeRequestConfiguration, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStockExchangeApply/add",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 安全库存变更申请配置 */
export interface ISecurityInventoryChangeRequestConfiguration {
    /** 设置类型 */
    type: string;
    /** 对应业务id */
    businessId: number;
    /** 申请单号 */
    applyNo: string;
    /** 是否应用编码规则 */
    isCodeRule: string;
    /** 物料id */
    materialId: number;
    /** 安全库存下限 */
    lowerLimit: number;
    /** 安全库存上限 */
    upperLimit: number;
    /** 采购触发下限 */
    purchaseLowerLimit: number;
    /** 通知人id集 */
    sendUserIds: number[];
    /** 通知类型 */
    sendType: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
