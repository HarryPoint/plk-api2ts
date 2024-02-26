import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料Bom相关/batchQueryByMaterialCodeUsingPOST
*/
export default function fetchMethod(data: string[], params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListMaterialBomBaseVo>(
        {
            url: "/masterdata-service/materialBom/by/materialCode/batchQuery",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«MaterialBomBaseVo»» */
export interface IJSONResultListMaterialBomBaseVo {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IMaterialBomBaseVo[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** MaterialBomBaseVo */
export interface IMaterialBomBaseVo {
    /** 物料ID */
    materialId: number;
    /** 物料编码 */
    materialCode: string;
    /** ID */
    id: number;
    /** 编码 */
    code: string;
    /** 名称 */
    name: string;
}
