import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/物料全局批次设置相关/editUsingPOST_12
*/
export default function fetchMethod(options: { data: IMaterialsBureauBatchSetEditObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/materialGlobalLotSetting/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料全局批次设置编辑对象 */
export interface IMaterialsBureauBatchSetEditObject {
    /** 启用序列号 */
    enableSerialNo?: ('Y' | 'N');
    /** 启用批次 */
    enableLot?: ('Y' | 'N');
    /** 物料批次出库规则 */
    lotOutRule?: ('BATCH_ORDER_FIFO' | 'MANUAL_SELECTION');
    /** 启用质量追溯 */
    enableQualityTraceability?: ('Y' | 'N');
    /** 启用外部码 */
    enableExternalCode?: ('Y' | 'N');
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
