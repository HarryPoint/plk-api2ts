import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目模板相关/saveUsingPOST_5
*/
export default function fetchMethod(options: { data: IProjectTemplateEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectTemplate/save",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目模板编辑请求DTO */
export interface IProjectTemplateEditRequestDTO {
    /** 项目id */
    projectId?: number;
    /** 项目模板id */
    id?: number;
    /** 项目模板名称 */
    name?: string;
    /** 项目模板大类 */
    projectCategory?: string;
    /** 项目模板简介 */
    intro?: string;
    /** 项目字段列表 */
    projectFields?: IIdCodeNameGenericTransportObject[];
    /** 项目团队是否勾选 */
    checkProjectTeam?: ('Y' | 'N');
    /** 项目成员是否勾选 */
    checkProjectMember?: ('Y' | 'N');
    /** 项目角色是否勾选 */
    checkProjectRole?: ('Y' | 'N');
    /** 项目计划是否勾选 */
    checkProjectPlan?: ('Y' | 'N');
    /** 项目计划字段 */
    projectPlanFields?: IIdCodeNameGenericTransportObject[];
    /** 项目计划自定义字段是否勾选 */
    checkProjectPlanCustomField?: ('Y' | 'N');
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** name */
    name?: string;
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
