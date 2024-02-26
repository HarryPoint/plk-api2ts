import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎/getEffectiveBehaviorStatusUsingGET
*/
export default function fetchMethod(options: { params: { templateId?: number } }, extraOptions?: any) {
    return http<IJSONResultDataInteractionOutputDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/getEffectiveBehaviorStatus",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«DataInteractionOutputDTO» */
export interface IJSONResultDataInteractionOutputDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataInteractionOutputDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** DataInteractionOutputDTO */
export interface IDataInteractionOutputDTO {
    /** 模板编码 */
    templateCode?: string;
    /** 生效状态 */
    interactionStatus?: string;
}
