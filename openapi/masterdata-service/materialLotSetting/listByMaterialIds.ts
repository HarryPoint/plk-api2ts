import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料批次设置相关/listByMaterialIdsUsingPOST
*/
export default function fetchMethod(options: { data: number[] }, extraOptions?: any) {
    return http<IJSONResultListMaterialBatchSettingsEditResponseObjects>(
        {
            url: "/masterdata-service/materialLotSetting/listByMaterialIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«物料批次设置编辑响应对象»» */
export interface IJSONResultListMaterialBatchSettingsEditResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialBatchSettingsEditTheResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 物料批次设置编辑响应对象 */
export interface IMaterialBatchSettingsEditTheResponseObject {
    /** 物料id */
    materialId?: number;
    /** 启用序列号 */
    enableSerialNo?: ('Y' | 'N');
    /** 序列号方案id */
    serialNoSchemeId?: number;
    /** 启用批次 */
    enableLot?: ('Y' | 'N');
    /** 批次方案id */
    lotSchemeId?: number;
    /** 启用质量追溯 */
    enableQualityTraceability?: ('Y' | 'N');
    /** 启用外部码 */
    enableExternalCode?: ('Y' | 'N');
    /** 外部码字段名称 */
    externalCodeFieldName?: string;
    /** 外部码长度 */
    externalCodeLength?: number;
}
