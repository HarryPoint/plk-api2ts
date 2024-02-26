import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/02-01-02-销售交期应答辅助相关/getMaterialRoutingSelectorUsingGET
*/
export default function fetchMethod(params: { materialId?: number }, extraOptions?: any) {
    return http<IJSONResultListProcessPathSelectVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/saleAssist/getMaterialRoutingSelector",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径选择VO»» */
export interface IJSONResultListProcessPathSelectVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPathSelectionVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工艺路径选择VO */
export interface IProcessPathSelectionVO {
    /** id */
    id?: number;
    /** 工艺路径名称 */
    name?: string;
    /** 工艺路径编号 */
    code?: string;
    /** 是否物料默认 */
    isDefault?: string;
    /** 物料bomId */
    materialBomId?: number;
    /** 物料bom名称 */
    materialBomName?: string;
    /** 物料bom编号 */
    materialBomCode?: string;
    /** 物料ID */
    materialId?: number;
}
