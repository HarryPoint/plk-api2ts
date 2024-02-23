import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程表单字段相关/getFieldFillRuleUsingGET
export default function fetchMethod(params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListProcessFormAssociationFormFillVO>(
        {
            url: "/flow-service/flowPathFormField/{id}/fillRule/get",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«流程表单关联表单填充VO»»
export interface IJSONResultListProcessFormAssociationFormFillVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessFormAssociatedFormFillVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程表单关联表单填充VO
export interface IProcessFormAssociatedFormFillVO {
    // id
    id: number;
    // 所属流程表单字段id
    flowPathFormFieldId: number;
    // 被采取的字段序号值
    columnSerialNo: string;
    // 被采取的字段序号值的下级字段序号值
    secondarySourceFieldSerialNo: string;
    // 被采取的字段序号值的下级字段编码
    secondarySourceFieldCode: string;
    // 填充到的目标字段序号值
    fillFormFieldSerialNo: string;
    // 字段填充方式
    fillWay: string;
    // 是否警用编辑
    isDisableEdited: string;
    // 是否允许修改填充内容- 默认是 Y
    isAllowModificationOfFillContent: string;
}
