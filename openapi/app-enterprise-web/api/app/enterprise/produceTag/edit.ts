import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产标签相关/editUsingPOST_19
*/
export default function fetchMethod(data: IProductionLabelEditingDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTag/edit",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 生产标签编辑DTO */
export interface IProductionLabelEditingDTO {
    /** id */
    id: number;
    /** 所属分类 */
    type: string;
    /** 标签名称 */
    name: string;
    /** 标签编号 */
    code: string;
    /** 是否应用编码规则 */
    isCodeRule: string;
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
