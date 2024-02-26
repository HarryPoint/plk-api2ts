import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/关键参数相关/saveUsingPOST_1
*/
export default function fetchMethod(data: IKeyParametersSaveTheDTO, extraOptions?: any) {
    return http<IJSONResultKeyParameterInformationResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/keyparameter/save",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 关键参数保存DTO */
export interface IKeyParametersSaveTheDTO {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 名称 */
    name: string;
    /** 关联物料 */
    materialIds?: number[];
    /** 关联工序 */
    processIds: number[];
    /** 关键参数集合 */
    parameterDetailList: ISaveTheDTOForKeyParameterDetails[];
}
/** 关键参数明细保存DTO */
export interface ISaveTheDTOForKeyParameterDetails {
    /** 字段id */
    id?: number;
    /** 字段名称 */
    name?: string;
    /** 帮助提示 */
    remark?: string;
    /** 字段类型 */
    inputType?: string;
    /** 文本类型 */
    textType?: string;
    /** 文本比较值，多个英文逗号,分割 */
    textCompareValue?: string;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 选项集，多个英文逗号,分割 */
    selector?: string;
}
/** JSONResult«关键参数信息响应对象» */
export interface IJSONResultKeyParameterInformationResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IKeyParameterInformationResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 关键参数信息响应对象 */
export interface IKeyParameterInformationResponseObject {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 关键参数集合 */
    parameterDetailList?: IKeyParameterDetailsResponseObject[];
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: number;
    /** 显示字段名称 */
    showFieldValue?: string;
}
/** 关键参数信息详情响应对象 */
export interface IKeyParameterDetailsResponseObject {
    /** 字段id */
    id?: number;
    /** 字段名称 */
    name?: string;
    /** 帮助提示 */
    remark?: string;
    /** 字段类型 */
    inputType?: string;
    /** 文本类型 */
    textType?: string;
    /** 文本比较值，多个英文逗号,分割 */
    textCompareValue?: string;
    /** 文本比较值集 */
    textCompareValueList?: string[];
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 选项集，多个英文逗号,分割 */
    selector?: string;
    /** 选项集 */
    selectorList?: string[];
}
