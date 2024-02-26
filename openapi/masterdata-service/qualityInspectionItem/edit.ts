import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检项/editUsingPOST_17
*/
export default function fetchMethod(data: IEditTheQualityInspectionClassificationDTO1, params: { enterpriseId: number; userId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/qualityInspectionItem/edit",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 编辑质检分类 DTO_1 */
export interface IEditTheQualityInspectionClassificationDTO1 {
    /** id，如果不传就是新增 */
    id: number;
    /** 质检分类名 */
    name: string;
    /** 质检分类编码 */
    code: string;
    /** 是否应用编码规则 */
    isCodeRule: string;
    /** 质检方式 */
    qualityMethod: string;
    /** 选择方式 */
    selectType: string;
    /** 选项内容集合 */
    selectors: IQualityInspectionItemEditDTO[];
    /** 备注 */
    remark: string;
    /** 附件文件key */
    attachedFileKey: string;
}
/** 质检项选择项编辑DTO */
export interface IQualityInspectionItemEditDTO {
    /** 选择项名称 */
    name: string;
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
