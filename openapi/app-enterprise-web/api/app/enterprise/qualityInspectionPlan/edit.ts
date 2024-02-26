import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/质检方案/editUsingPOST_22
*/
export default function fetchMethod(options: { data: IEditTheQualityInspectionSchemeDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityInspectionPlan/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 编辑质检方案 DTO */
export interface IEditTheQualityInspectionSchemeDTO {
    /** id，如果不传就是新增 */
    id?: number;
    /** 质检方案名 */
    name: string;
    /** 质检方案编码 */
    code?: string;
    /** 是否应用编码规则 */
    isCodeRule: string;
    /** 所属质检分类id */
    qualityInspectionCategoryId?: number;
    /** 质检项清单 */
    itemList?: IQualityInspectionSolutionQualityInspectionItemAssociationInformationEditTheDTO[];
    /** 版次号 */
    issueCode?: string;
    /** 备注 */
    remark?: string;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 质检方式 */
    type?: string;
    /** 质检比例（填多少传多少） */
    qualityInspectionRatio?: number;
    /** 质检数量 */
    qualityInspectionQuantity?: number;
}
/** 质检方案质检项关联信息编辑DTO */
export interface IQualityInspectionSolutionQualityInspectionItemAssociationInformationEditTheDTO {
    /** 关联id */
    id?: number;
    /** 所属质检项id */
    qualityInspectionItemId?: number;
    /** 数值质检标准 */
    numberStandard?: string;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
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
