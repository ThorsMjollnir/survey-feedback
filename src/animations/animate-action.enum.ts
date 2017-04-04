export enum AnimateActionEnum {
  Hidden = <any>"Hidden",
  Visible = <any>"Visible",
  FadeIn = <any>"FadeIn",
  FadeInUp = <any>"FadeInUp",
  FadeInUpBig = <any>"FadeInUpBig",
  FadeInDown = <any>"FadeInDown",
  FadeInDownBig = <any>"FadeInDownBig",
  FadeInLeft = <any>"FadeInLeft",
  FadeInLeftBig = <any>"FadeInLeftBig",
  FadeInRight = <any>"FadeInRight",
  FadeInRightBig = <any>"FadeInRightBig",
  FadeOut = <any>"FadeOut",
  FadeOutDown = <any>"FadeOutDown",
  FadeOutDownBig = <any>"FadeOutDownBig",
  FadeOutLeft = <any>"FadeOutLeft",
  FadeOutLeftBig = <any>"FadeOutLeftBig",
  FadeOutRight = <any>"FadeOutRight",
  FadeOutRightBig = <any>"FadeOutRightBig",
  ZoomIn = <any>"ZoomIn"
}

export class AnimateActionAlias {
  static readonly aliasMap: Map<AnimateActionEnum, AnimateActionEnum> = new Map([
    [AnimateActionEnum.Visible, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeIn, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInUp, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInUpBig, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInDown, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInDownBig, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInLeft, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInLeftBig, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInRight, AnimateActionEnum.Visible],
    [AnimateActionEnum.FadeInRightBig, AnimateActionEnum.Visible],
    [AnimateActionEnum.ZoomIn, AnimateActionEnum.Visible],

    [AnimateActionEnum.Hidden, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOut, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOutDown, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOutDownBig, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOutLeft, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOutLeftBig, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOutRight, AnimateActionEnum.Hidden],
    [AnimateActionEnum.FadeOutRightBig, AnimateActionEnum.Hidden],
  ])
}
