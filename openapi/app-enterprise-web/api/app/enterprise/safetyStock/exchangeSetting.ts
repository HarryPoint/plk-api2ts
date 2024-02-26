import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安全库存相关/exchangeSettingUsingPOST
*/
export default function fetchMethod(options: { data: IUnifiedSecurityInventoryConfiguration }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStock/exchangeSetting",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存统一设置配置 */
export interface IUnifiedSecurityInventoryConfiguration {
    /** 设置类型 */
    type: ('ALL' | 'AREA' | 'STOREHOUSE' | 'WAREHOUSE');
    /** 对应业务id */
    businessId?: number;
    /** 是否开启预警 */
    isWarning?: ('Y' | 'N');
    /** 计数方式 */
    computeType?: ('TOTAL' | 'CAN_USE');
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
